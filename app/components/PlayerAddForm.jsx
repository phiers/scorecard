import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from 'playerActions'; // eslint-disable-line
/* eslint-disable no-param-reassign */

const PlayerAddForm = (props) => {
  const mode = props.settings.scoringMode;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const first = evt.target[0].value;
    const last = evt.target[1].value;
    if (first !== '' && last !== '') {
      // const id = Date.now();
      props.startAddPlayer({ first, last, checked: mode });
    }
    // clean up the UI
    evt.target[0].value = '';
    evt.target[1].value = '';
    evt.target[0].focus();
  };
  return (
    <div className="player-add">
      <h4>Add New Player:</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <button className="button">+</button>
      </form>
    </div>
  );
};

export default connect(state => state, actions)(PlayerAddForm);

PlayerAddForm.propTypes = {
  startAddPlayer: PropTypes.func,
  settings: PropTypes.object, // eslint-disable-line
};
