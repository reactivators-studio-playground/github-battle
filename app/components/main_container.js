import React from 'react';

type Props = {
  children?: any,
}

export default (props: Props) => (
  <div className="main-container">
    {props.children}
  </div>
);
