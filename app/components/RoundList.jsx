import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as roundActions from 'roundActions'; // eslint-disable-line

class RoundList extends Component {
  constructor() {
    super();
    this.state = { rounds: null };
  }
  componentDidMount() {
    roundActions.startFetchArchivedRounds();
  }

  renderRoundList() {
    const rounds = this.props.rounds;
    if (rounds) {
      return rounds.map(round =>
        <p>round.course.name</p>,
      );
    }
    return <p>No Archived Rounds</p>;
  }

  render() {
    return (
      <div>{this.renderRoundList()}</div>
    );
  }
}

RoundList.propTypes = {
  uid: PropTypes.string.isRequired,
};

export default connect(state => ({ rounds: state.archivedRounds }), roundActions)(RoundList);
