/* @flow */

import React, { PureComponent } from 'react';

import Popper from '../Popper/Popper';

import { Placements } from '../types';
import type { Placement } from '../types';

type Props = {
  arrowColor: string,
  arrowSize: number,
  children?: any,
  forceOpen?: boolean,
  message: any,
  placement: Placement,
  tooltipClassName?: string,
  tooltipStyle?: Object,
};

type State = {
  isOpen: boolean,
}

const baseTooltipStyle = {
  background: '#FFC107',
  color: '#000',
  width: 150,
  borderRadius: 3,
  boxShadow: '0 0 2px rgba(0,0,0,0.5)',
  padding: 10,
  textAlign: 'center'
}

class Tooltip extends PureComponent {
  props: Props
  state: State

  static defaultProps = {
    placement: Placements.RIGHT,
    arrowSize: 5,
    arrowColor: '#FFC107',
  }

  state = {
    isOpen: false,
  }

  getPopoutComponent () {
    const { props } = this;
    if (props.tooltipClassName) {
      return (
        <div className={props.tooltipClassName}>
          {props.message}
        </div>
      );
    } else {
      return (
        <div
          style={{
            ...baseTooltipStyle,
            ...props.tooltipStyle,
          }}
        >
          {props.message}
        </div>
      );
    }
  }

  render () {
    const { props, state } = this;
    return (
      <Popper
        hasArrow
        arrowSize={props.arrowSize}
        arrowColor={props.arrowColor}
        placement={props.placement}
        popoutComponent={this.getPopoutComponent()}
        isOpen={props.forceOpen || state.isOpen}
      >
        <div
          onMouseEnter={() => {
            this.setState({ isOpen: true });
          }}
          onMouseLeave={() => {
            this.setState({ isOpen: false });
          }}
        >
          {props.children}
        </div>
      </Popper>
    );
  }
}

export default Tooltip;
