import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
/* eslint-disable */
import TitleBar from 'TitleBar';
import PlayerList from 'PlayerList';
import PlayerAddForm from 'PlayerAddForm';
/* eslint-enable */

class PlayerChoice extends Component {
  constructor() {
    super();
    this.handleContinue = this.handleContinue.bind(this);
  }
  handleContinue() {
    const { dispatch, players } = this.props;
    let sum = 0;
    players.forEach(player => player.checked ? sum += 1 : sum); // eslint-disable-line
    if (sum <= 3) {
      // initiate the round object with selected players
      // set all checkmarks in players array to false
      // navigate to choose course screen
      browserHistory.push('/course-list');
    } else {
      alert("You've selected too many players!");
    }
  }
  render() {
    return (
      <div className="player-choice">
        <TitleBar title="Choose Players" />
        <PlayerList />
        <PlayerAddForm />
        <button className="button warning" onClick={this.handleContinue}>Continue</button>
      </div>
    );
  }
}

export default connect(state => state)(PlayerChoice);

PlayerChoice.propTypes = {
  dispatch: PropTypes.func,
  players: PropTypes.array, // eslint-disable-line
};
