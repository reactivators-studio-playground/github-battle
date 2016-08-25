import Raven from 'raven-js';

const _APP_INFO = {
  name: 'Github Battle',
  branch: 'master',
  version: '1.0.0',
};

const sentryKey = 'bca465026dc84ef6a92815c236f86d98';
const sentryAppID = '94335';
const sentryServerUrl = 'app.getsentry.com';

const createSentryConfig = (key, app, server = sentryServerUrl) =>
  Raven.config(`https://${key}@${server}/${app}`, {
    release: _APP_INFO.version,
    tags: {
      branch: _APP_INFO.branch,
    }
  });

const configSentry = () => {
  // setup window on error handler
  window.onerror = () => {
    Raven.showReportDialog();
  };

  // install sentry config
  createSentryConfig(sentryKey, sentryAppID).install();
}

export default configSentry;
