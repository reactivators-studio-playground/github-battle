// @flow
import React from 'react';

import Styles from '../styles';

type PromptType = {
  header: string,
  username: string,
  onSubmitUsername: Function,
  onUpdateUsername: Function,
};

const Prompt = (props: PromptType) => {
  const { header, username, onSubmitUsername, onUpdateUsername } = props;
  return (
    <div
      className="jumbotron col-sm-6 col-sm-offset-3 text-center"
      style={Styles.transparentBg}
    >
      <h1>{header}</h1>
      <div className="col-sm-12">
        <form onSubmit={onSubmitUsername}>
          <div className="form-group">
            <input
              className="form-control"
              placeholder="Github Username"
              type="text"
              onChange={onUpdateUsername}
              value={username}
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
};

export default Prompt;
