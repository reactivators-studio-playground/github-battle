// @flow
import React from 'react';
import { Link } from 'react-router';

import Styles from '../styles';

export default () => (
  <div className="jumbtron col-sm-12 text-center" style={Styles.transparentBg} >
    <h1>Github Battle</h1>
    <p className="lead">Some words</p>
    <Link to="/playerOne">
      <button type="button" className="btn btn-lg btn-success">Getting started</button>
    </Link>
  </div>
);
