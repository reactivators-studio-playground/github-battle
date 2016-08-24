// @flow
import React from 'react';
import { Link } from 'react-router';

import Main from './main';

export default () => (
  <Main>
    <h1>Github Battle</h1>
    <p className="lead">Some words</p>
    <Link to="/playerOne">
      <button type="button" className="btn btn-lg btn-success">Getting started</button>
    </Link>
  </Main>
);
