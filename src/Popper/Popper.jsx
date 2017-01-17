/* @flow */

import React, { PureComponent } from 'react';
import PopperJs from 'popper.js';

import PopperArrow from './PopperArrow';
import { Placements } from '../types';
import type { Placement } from '../types';

type Props = {
  arrowColor: string,
  arrowSize: number,
  children?: any,
  hasArrow: any,
  isOpen: boolean,
  placement: Placement,
  popoutComponent: any,
}

type PopperData = {
  offsets: {
    popper: {
      left: number,
      top: number,
      position: Placement,
    },
    arrow: {
      left: number,
      top: number,
    }
  },
};

type Modifiers = {
  applyStyle: {
    enabled: boolean,
  },
  arrow?: {
    element: HTMLElement,
  },
}

type State = {
  data: PopperData,
}

class Popper extends PureComponent {
  props: Props
  state: State
  state = {}

  _popper = null
  _popperParentNode = null
  _popoutNode = null
  _arrow = null

  static defaultProps = {
    arrowColor: '#FFC107',
    arrowSize: 5,
    isOpen: true,
    placement: Placements.BOTTOM,
  }

  componentDidMount () {
    this.instantiatePopper();
  }

  componentWillReceiveProps () {
    if (!this._popper) {
      this.instantiatePopper();
    }
    this.updatePopper();
  }

  componentWillUnmount () {
    if (this._popper) {
      this._popper.destroy();
    }
  }

  instantiatePopper () {
    const modifiers : Modifiers = {
      applyStyle: { enabled: false},
    };
    if (this.props.hasArrow && this._arrow) {
      modifiers.arrow = { element: this._arrow };
    }
    this._popper = new PopperJs(this._popperParentNode, this._popoutNode, {
      placement: this.props.placement,
      modifiers,
      onCreate: (data) => this.setState({ data }),
      onUpdate: (data) => this.setState({ data }),
    });
    this.updatePopper();
  }

  updatePopper () {
    requestAnimationFrame(() => {
      if (this._popper) {
        this._popper.update();
      }
    });
  }

  getPopperStyle (data: PopperData) {
    if (!data) {
      return {};
    }
    const left = Math.round(data.offsets.popper.left);
    const top = Math.round(data.offsets.popper.top);
    const transform = `translate3d(${left}px, ${top}px, 0)`;
    return {
      position: data.offsets.popper.position,
      transform,
      WebkitTransform: transform,
      top: 0,
      left: 0,
      display: this.props.isOpen ? 'block' :  'none',
      ...this.getPopperMargin(),
    };
  }

  getPopperMargin () {
    const { props } = this;
    if (!props.hasArrow) {
      return {};
    }
    if (props.placement.includes(Placements.BOTTOM)) {
      return { marginTop: props.arrowSize };
    } else if (props.placement.includes(Placements.LEFT)) {
      return { marginRight: props.arrowSize };
    } else if (props.placement.includes(Placements.RIGHT)) {
      return { marginLeft: props.arrowSize };
    } else if (props.placement.includes(Placements.TOP)) {
      return { marginBottom: props.arrowSize };
    }
    return {};
  }

  getArrowStyle (data: PopperData) {
    if (!data) {
      return {};
    }
    const left = Math.round(data.offsets.arrow.left);
    const top = Math.round(data.offsets.arrow.top);

    if (this.props.placement.includes(Placements.TOP)) {
      return {
        position: 'absolute',
        left,
      };
    } else if (this.props.placement.includes(Placements.LEFT)) {
      return {
        position: 'absolute',
        top,
        right: 0,
      };
    } else {
      return {
        position: 'absolute',
        left,
        top,
      };
    }
  }

  render () {
    const { props, state } = this;
    return (
      <div>
        <div
          ref={(el) => {
            this._popperParentNode = el;
          }}
        >
          {props.children}
        </div>
        <div
          ref={(el) => {
            this._popoutNode = el;
          }}
          style={this.getPopperStyle(state.data)}
        >
          {props.popoutComponent}
          {props.hasArrow &&
            <div
              ref={(el) => {
                this._arrow = el;
              }}
              style={this.getArrowStyle(state.data)}
            >
              <PopperArrow
                placement={props.placement}
                size={props.arrowSize}
                color={props.arrowColor}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

export default Popper;
