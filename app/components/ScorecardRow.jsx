import React, { PropTypes } from 'react';

const ScorecardRow = (props) => {
  const { par, hdcp, holeNo } = props;
  return (
    <tr className="row-flex">
      <td>{holeNo}</td>
      <td>{hdcp}</td>
      <td>{par}</td>
      <td className="player">3</td>
      <td className="player">3</td>
      <td className="player">3</td>
      <td className="player">3</td>
    </tr>
  );
};

export default ScorecardRow;

ScorecardRow.propTypes = {
  // scores: PropTypes.array.isRequired, // eslint-disable-line
};
