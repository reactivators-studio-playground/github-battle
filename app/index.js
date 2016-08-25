// @flow
import ReactDOM from 'react-dom';

import routes from './config/routes';
import sentryConfig from './config/sentry_config';

// install sentry
sentryConfig.install();

// render react router to #app
ReactDOM.render(
  routes,
  document.getElementById('app')
);
