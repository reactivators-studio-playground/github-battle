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
import PromptContainer from '../containers/prompt_container';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="playerOne" header="Player One" component={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
    </Route>
  </Router>
);
