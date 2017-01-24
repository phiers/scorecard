import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

/* eslint-disable jsx-a11y/no-static-element-interactions*/
const ScorecardRow = (props) => {
  const { par, hdcp, holeNo, playerNo1, playerNo2, playerNo3, playerNo4 } = props;
  const handleEdit = () => {
    // Ensure the hole has some scores to edit by checking existence of playerNo1
    if (playerNo1) {
      browserHistory.push(`round-edit/${holeNo}`);
    } else {
      browserHistory.push(`round/${holeNo}`);
    }
  };

  const renderScores = () => {
    const scoreArray = [playerNo1, playerNo2, playerNo3, playerNo4];
    return scoreArray.map((score, index) => {
      const style = () => {
        if (score < par) {
          return { color: 'red' };
        }
        if (score > par) {
          return { color: '#ff9800' };
        }
        return {};
      };
      return <td key={index} className="player" style={style()}>{score}</td>;
    });
  };
  return (
    <tr className="row-flex" onClick={handleEdit}>
      <td>{holeNo}</td>
      <td>{hdcp}</td>
      <td>{par}</td>
      {renderScores()}
    </tr>
  );
};

export default ScorecardRow;

ScorecardRow.propTypes = {
  hdcp: PropTypes.number.isRequired,
  holeNo: PropTypes.number.isRequired,
  par: PropTypes.number.isRequired,
  playerNo1: PropTypes.number,
  playerNo2: PropTypes.number,
  playerNo3: PropTypes.number,
  playerNo4: PropTypes.number,
};
