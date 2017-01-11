import React, { PropTypes } from 'react';

const CourseAddHole = (props) => {
  /* This component will display par and hdcp data if editing a course,
   * otherwise, it displays the default values. Props are passed from
   * CourseEdit down thru CourseAddHoleList
   */
  const holeNo = props.holeNo;
  // Next three lines are key to add or edit mode
  const { hdcp, par } = props.data ? props.data[holeNo - 1] : 0;
  const parDisplay = par || 4;
  const hdcpDisplay = hdcp || 9;
  const handlePlus = (evt) => {
    evt.preventDefault();
    const target = evt.target.nextSibling;
    const newValue = parseInt(target.textContent, 10) + 1;
    target.textContent = newValue;
  };
  const handleMinus = (evt) => {
    evt.preventDefault();
    const target = evt.target.previousSibling;
    const newValue = parseInt(target.textContent, 10) - 1;
    target.textContent = newValue;
  };
  return (
    <div className="add-hole">
      <span className="button-row">
        <p>{holeNo}</p>
        <span className="input-group">
          <button onClick={handlePlus}>+</button>
          <p className="par">{parDisplay}</p>
          <button onClick={handleMinus}>-</button>
        </span>
        <span className="input-group">
          <button onClick={handlePlus}>+</button>
          <p className="hdcp">{hdcpDisplay}</p>
          <button onClick={handleMinus}>-</button>
        </span>
      </span>
    </div>
  );
};

export default CourseAddHole;

CourseAddHole.propTypes = {
  holeNo: PropTypes.number.isRequired,
  data: PropTypes.array, // eslint-disable-line
};
