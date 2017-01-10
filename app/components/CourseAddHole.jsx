import React, { PropTypes } from 'react';

const CourseAddHole = (props) => {
  const holeNo = props.holeNo;
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
          <p className="par">4</p>
          <button onClick={handleMinus}>-</button>
        </span>
        <span className="input-group">
          <button onClick={handlePlus}>+</button>
          <p className="hdcp">10</p>
          <button onClick={handleMinus}>-</button>
        </span>
      </span>
    </div>
  );
};

export default CourseAddHole;

CourseAddHole.propTypes = {
  holeNo: PropTypes.number.isRequired,
};
