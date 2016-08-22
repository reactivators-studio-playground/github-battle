// @flow
import React from 'react';

import Prompt from '../components/prompt';

type Props = {
  route: {
    component: Function,
    header: string,
    path: string,
  },
  routeParams: {
    playerOne: string,
  },
};

class PropmtContainer extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired,
  }

  constructor(props: Props) {
    super(props);

    this.state = {
      username: '',
    };

    this.onUpdateUsername = this.onUpdateUsername.bind(this);
    this.onSubmitUsername = this.onSubmitUsername.bind(this);
  }

  state: {
    username: string,
  };
  onUpdateUsername: Function;
  onSubmitUsername: Function;

  onUpdateUsername(event: Object): void {
    this.setState({
      username: event.target.value,
    });
  }

  onSubmitUsername(event: Object): void {
    event.preventDefault();
    const username: string = this.state.username;

    this.setState({
      username: '',
    });

    if (this.props.routeParams.playerOne) {
      // goto battle
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: username,
        },
      });
    } else {
      // goto playerTwo
      this.context.router.push(`/playerTwo/${username}`);
    }
  }

  render() {
    console.log(this.state);
    return (
      <Prompt
        header={this.props.route.header}
        username={this.state.username}
        onSubmitUsername={this.onSubmitUsername}
        onUpdateUsername={this.onUpdateUsername}
      />
    );
  }
}

export default PropmtContainer;
