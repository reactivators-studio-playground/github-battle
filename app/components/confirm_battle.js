// @flow
import React from 'react';
import { Link } from 'react-router';

import Styles from '../styles';
import UserDetails from './user_details';
import UserDetailsWrapper from './user_details_wrapper';

type Props = {
  isLoading: boolean,
  playersInfo: Object[],
  onInitiateBattle: Function,
}

export default (props: Props) => (
  props.isLoading
    ? <p>Loading</p>
    : <div className="jumbotron col-sm-12 text-center" style={Styles.transparentBg}>
      <h1>Confirm Players</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header={"Player 1"}>
          <UserDetails info={props.playersInfo[0]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header={"Player 2"}>
          <UserDetails info={props.playersInfo[1]} />
        </UserDetailsWrapper>
      </div>
      <div className="col-sm-8 col-sm-offset-2">
        <div className="col-sm-12" style={Styles.space}>
          <button
            type="button"
            className="btn btn-lg btn-success"
            onClick={props.onInitiateBattle}
          >
            Initiate Battle
          </button>
        </div>
        <div className="col-sm-12" style={Styles.space}>
          <Link to="/playerOne">
            <button
              type="button"
              className="btn btn-lg btn-danger"
            >
              Repick Players
            </button>
          </Link>
        </div>
      </div>
    </div>
);
