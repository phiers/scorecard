import React, { PropTypes } from 'react';

const UtilityInput = (props) => {
  const handleMinus = (evt) => {
    evt.preventDefault();
    const target = evt.target.nextSibling;
    const newValue = parseInt(target.textContent, 10) - 1;
    target.textContent = newValue;
  };
  const handlePlus = (evt) => {
    evt.preventDefault();
    const target = evt.target.previousSibling;
    const newValue = parseInt(target.textContent, 10) + 1;
    target.textContent = newValue;
  };
  return (
    <span className="input-group">
      <button onClick={handleMinus}>-</button>
      <p className={props.assignedClass}>{props.display}</p>
      <button onClick={handlePlus}>+</button>
    </span>
  );
};

export default UtilityInput;

UtilityInput.propTypes = {
  assignedClass: PropTypes.string.isRequired,
  display: PropTypes.number.isRequired,
};
