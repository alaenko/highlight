import React from 'react';
import Popular from './Popular';
import New from './New';

export default function Styler(Component) {
  return function(props, ...args) {
    const component = <Component {...props} {...args} />;
    if (props.views > 1000) {
      return <Popular>component</Popular>;
    }
    if (this.props.views < 100) {
      return <New>component</New>;
    }
    return component;
  }
}
