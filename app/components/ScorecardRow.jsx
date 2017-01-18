import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

/* eslint-disable jsx-a11y/no-static-element-interactions*/
const ScorecardRow = (props) => {
  const { par, hdcp, holeNo, playerNo1, playerNo2, playerNo3, playerNo4 } = props;
  const handleEdit = () => {
    // Ensure the hole has some sccores to edit by checking existence of playerNo1
    if (playerNo1) {
      browserHistory.push(`round-edit/${holeNo}`);
    } else {
      browserHistory.push(`round/${holeNo}`);
    }
  };
  return (
    <tr className="row-flex" onClick={handleEdit}>
      <td>{holeNo}</td>
      <td>{hdcp}</td>
      <td>{par}</td>
      <td className="player">{playerNo1}</td>
      <td className="player">{playerNo2}</td>
      <td className="player">{playerNo3}</td>
      <td className="player">{playerNo4}</td>
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
