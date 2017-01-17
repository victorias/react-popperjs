/* @flow */

import React, { PureComponent } from 'react';

import { Placements } from '../types';
import type { Placement } from '../types';

type Props = {
  placement: Placement,
  size: Number,
  color: string,
}

const baseArrowStyle = {
  width: 0,
  height: 0,
  borderStyle: 'solid',
  position: 'absolute',
};

class PopperArrow extends PureComponent {
  prop: Props

  getArrowStyle (): Object {
    const { props } = this;
    if (props.placement.includes(Placements.BOTTOM)) {
      // ARROW UP
      return {
        ...baseArrowStyle,
        borderWidth: `0 ${props.size}px ${props.size}px ${props.size}px`,
        borderColor: `transparent transparent ${props.color} transparent`,
        top: `-${props.size}px`,
        left: `calc(50% - ${props.size}px)`,
        marginTop: 0,
        marginBottom: 0,
      };
    } else if (props.placement.includes(Placements.LEFT)) {
      // ARROW RIGHT
      return {
        ...baseArrowStyle,
        borderWidth: `${props.size}px 0 ${props.size}px ${props.size}px`,
        borderColor: `transparent transparent transparent ${props.color}`,
        right: `-${props.size}px`,
        top: `calc(50% - ${props.size}px)`,
        marginLeft: 0,
        marginRight: 0,
      };
    } else if (props.placement.includes(Placements.RIGHT)) {
      // ARROW LEFT
      return {
        ...baseArrowStyle,
        borderWidth: `${props.size}px ${props.size}px ${props.size}px 0`,
        borderColor: `transparent ${props.color} transparent transparent`,
        left: `-${props.size}px`,
        top: `calc(50% - ${props.size}px)`,
        marginLeft: 0,
        marginRight: 0,
      };
    } else if (props.placement.includes(Placements.TOP)) {
      // ARROW BOTTOM
      return {
        ...baseArrowStyle,
        borderWidth: `${props.size}px ${props.size}px 0 ${props.size}px`,
        borderColor: `${props.color} transparent transparent transparent`,
        bottom: `-${props.size}px`,
        left: `calc(50% - ${props.size}px)`,
        marginTop: 0,
        marginBottom: 0,
      };
    }
    return {};
  }

  render () {
    return (
      <div
        style={this.getArrowStyle()}
      />
    );
  }
}

export default PopperArrow;
