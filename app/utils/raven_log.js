import Raven from 'raven-js';

const ravenLog = (message, context) => {
  Raven.captureMessage(message, {
    level: 'error',
    extra: context,
  });

  console.error(message);
};

export default ravenLog;
