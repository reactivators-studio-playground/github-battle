import React, { PropTypes } from 'react';

import Results from '../components/results';
import { battle } from '../utils/github_service';

export default class ResultsContainer extends React.Component {
  state = {
    isLoading: true,
    scores: [],
  }

  componentDidMount() {
    battle(this.props.location.state.playersInfo)
      .then(scores => this.setState({
        ...this.state,
        scores,
        isLoading: false,
      }));
  }

  render() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}
      />
    );
  }
}

ResultsContainer.propTypes = {
  location: PropTypes.object.isRequired,
};
