// @flow
import ReactDOM from 'react-dom';

import routes from './config/routes';
import configSentry from './config/sentry_config';

// config sentry by default
configSentry();

// render react router to #app
ReactDOM.render(
  routes,
  document.getElementById('app')
);
