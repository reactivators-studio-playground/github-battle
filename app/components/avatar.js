// @flow
import React from 'react';

import ProfilePic from './profile_pic';
import ProfileLink from './profile_link';

type Props = {
  username: string,
};

export default (props: Props) => (
  <div>
    <ProfilePic username={props.username} />
    <ProfileLink username={props.username} />
  </div>
);
