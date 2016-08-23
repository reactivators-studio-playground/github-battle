// @flow
import React, { PropTypes } from 'react';

import ConfirmBattle from '../components/confirm_battle';

class ConfirmBattleContainer extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  static propTypes = {
  }
  state = {
    isLoading: true,
    playersInfo: [],
  }

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo}
      />
    );
  }
}

export default ConfirmBattleContainer;
