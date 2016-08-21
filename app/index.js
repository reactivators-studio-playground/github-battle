// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import FriendsContainer from './components/friends_container';

const App = () => (
  <FriendsContainer />
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
