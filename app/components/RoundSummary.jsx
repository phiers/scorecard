import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import playerActions from 'playerActions';
import roundActions from 'roundActions';
import settingsActions from 'settingsActions';
/* eslint-enable */

const RoundSummary = (props) => {
  const { course, dispatch, players, round, router } = props;
  const handleFinalizeRound = () => {
    console.log(round);
  };
  const renderPlayersList = () => round.players.map((p) => {
    const gross = p.scores.reduce((a, b) => {
      return a + b.score;
    }, 0);
    return (
      <div key={p.id} className="player-list">
        <span>{p.first} {p.last}</span>
        <span>{gross}</span>
        <span>{p.hdcp}</span>
        <span>{gross - p.hdcp}</span>
      </div>
    );
  });
  return (
    <div>
      <TitleBar title="Round Summary" />
      <div className="round-summary">
        <div className="round-info">
          <p>COURSE: {course.name}, {course.state}</p>
        </div>
        <div className="round-info">
          <p>PLAYERS:</p>
        </div>
        <span className="player-list-heading"><p>Name</p><p>Gross</p><p>Hdcp</p><p>Net</p></span>
        {renderPlayersList()}
        <div className="button-group">
          <button className="button" onClick={() => router.push('/scorecard')}>View Scorecard</button>
          <button className="button" onClick={handleFinalizeRound}>Finalize Round</button>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  // grab selected players by comparing to round player ids
  const playerIdsArr = state.round.players.map(player => player.id);
  const players = state.players.filter((p) => {
    if (playerIdsArr.indexOf(p.id) > -1) {
      return true;
    }
    return false;
  });

  return {
    course: state.round.course,
    players,
    round: state.round,
  };
};

export default connect(mapStateToProps)(RoundSummary);