import React, { PropTypes } from 'react';

const ScorecardRow = (props) => {
  const { par, hdcp, holeNo, playerNo1, playerNo2, playerNo3, playerNo4 } = props;
  return (
    <tr className="row-flex">
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
