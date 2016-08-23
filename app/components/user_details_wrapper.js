import React from 'react';

type Props = {
  header: string,
  children?: Object,
}

const UserDetailsWrapper = (props: Props) => (
  <div className="col-sm-6">
    <p className="lead">
      {props.header}
    </p>
    {props.children}
  </div>
);

export default UserDetailsWrapper;
