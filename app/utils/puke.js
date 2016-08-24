// @flow
import React from 'react';

export default (object: Object) =>
  <pre>{(JSON.stringify(object, null, ' '))}</pre>;
