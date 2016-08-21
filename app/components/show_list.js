// @flow
import React from 'react';

type Props = {
  names: string[],
};

export default (props: Props) => {
  const friendsList = props.names.map((friend) => (
    <li key={friend}> {friend} </li>
  ));
  return (
    <div>
      <h3>
        Friends
      </h3>
      <ul>
        {friendsList}
      </ul>
    </div>
  );
};
