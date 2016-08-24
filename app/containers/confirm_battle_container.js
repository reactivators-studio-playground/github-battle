// @flow
import React, { PropTypes } from 'react';

import ConfirmBattle from '../components/confirm_battle';
import getUsers from '../utils/github_service';

type Props = {
  location: string,
};

class ConfirmBattleContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  constructor(props: Props) {
    super(props);

    this.handleInitiateBattle = this.handleInitiateBattle.bind(this);
  }
  state = {
    isLoading: true,
    playersInfo: [],
  }

  componentDidMount() {
    console.log(this.props);
    const { playerOne, playerTwo } = this.props.location.query;

    const users = getUsers(playerOne, playerTwo);
    users
    .then((data) => {
      this.setState({ ...this.state, playersInfo: data, isLoading: false });
    });
  }
  handleInitiateBattle: Function;
  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo,
      },
    });
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
        onInitiateBattle={this.handleInitiateBattle}
      />
    );
  }
}

export default ConfirmBattleContainer;
