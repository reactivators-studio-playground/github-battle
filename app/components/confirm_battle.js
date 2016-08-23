// @flow
import React from 'react';

type Props = {
  isLoading: boolean,
}

export default (props: Props) => (
  props.isLoading
    ? <p>Loading</p>
    : <div>Confirm Battle</div>
);
