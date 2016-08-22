// @flow
import React from 'react';

import Styles from '../styles';

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

  onUpdateUsername(event: Object): void {
    this.setState({
      username: event.target.value,
    });
  }

  onSubmitUsername(event: Object): void {
    console.log(this.props, this.context);

    event.preventDefault();
    const username = this.state.username;

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
      <div
        className="jumbotron col-sm-6 col-sm-offset-3 text-center"
        style={Styles.transparentBg}
      >
        <h1>{this.props.route.header}</h1>
        <div className="col-sm-12">
          <form onSubmit={this.onSubmitUsername}>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Github Username"
                type="text"
                onChange={this.onUpdateUsername}
                value={this.state.username}
              />
            </div>
            <div className="form-group col-sm-4 col-sm-offset-4">
              <button
                className="btn btn-block btn-success"
                type="submit"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PropmtContainer;
