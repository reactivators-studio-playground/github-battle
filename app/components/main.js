// @flow
import React from 'react';

type Props = {
  children?: any,
}

export default class Main extends React.Component {
  props: Props;
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
