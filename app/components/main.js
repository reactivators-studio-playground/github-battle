// @flow
import React from 'react';

import Styles from '../styles';

type Props = {
  children?: any,
};

export default (props: Props) => (
  <div className="jumbotron col-sm-12 text-center" style={Styles.transparentBg}>
    {props.children}
  </div>
);
