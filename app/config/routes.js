// @flow

import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';

import Main from '../components/main';
import Home from '../components/home';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="home" component={Home} />
    </Route>
  </Router>
);
