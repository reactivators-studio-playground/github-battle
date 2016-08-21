// @flow
import React from 'react';

type Props = {
  username: string,
};

export default (props: Props) => (
  <img
    src={`https://avatars3.githubusercontent.com/${props.username}?s=230`}
    alt={'user'}
  />
);
