// @flow
import React from 'react';
import ShowList from './show_list';
import Avatar from './avatar';

export default () => {
  const name = 'vmlinz';
  const friends = ['Yu Ao', 'Kai Wang', 'Ting Liu'];
  return (
    <div>
      <Avatar username={name} />
      <ShowList names={friends} />
    </div>
  );
};
