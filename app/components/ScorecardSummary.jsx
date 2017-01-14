import React, { PropTypes } from 'react';

const ScorecardSummary = (props) => {
  const renderRows = () =>
    props.players.map((player) => {
      let totalScore = 0;
      for (let t = 0; t < props.lastHole; t += 1) {
        totalScore += player.scores[t].score;
      }
      let frontScore = 0;
      const length = props.lastHole > 9 ? 9 : props.lastHole;
      for (let i = 0; i < length; i += 1) {
        frontScore += player.scores[i].score;
      }
      const frontScoreDisplay = frontScore === 0 ? '-' : frontScore;
      const backScore = totalScore - frontScore;
      const backScoreDisplay = backScore === 0 ? '-' : backScore;
      return (
        <div key={player.id} className="summary-row">
          <span>{player.first} {player.last}</span>
          <span>{frontScoreDisplay}</span>
          <span>{backScoreDisplay}</span>
          <span>{totalScore}</span>
        </div>
      );
    });

  return (
    <div className="summary-info">
      <div className="heading-row">
        <span>Name</span>
        <span>Front</span>
        <span>Back</span>
        <span>Total</span>
      </div>
      {renderRows()}
    </div>
  );
};

ScorecardSummary.propTypes = {
  players: PropTypes.array.isRequired, // eslint-disable-line
};

export default ScorecardSummary;
