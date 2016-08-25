import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../styles/main_container.css';

type Props = {
  children?: any,
  location: Object,
}

export default (props: Props) => (
  <div className="main-container">
    <ReactCSSTransitionGroup
      transitionName="appear"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
        {React.cloneElement(props.children, { key: props.location.pathname })}
    </ReactCSSTransitionGroup>
  </div>
);
