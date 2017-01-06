import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import actions from 'playerActions'; // eslint-disable-line
/* eslint-disable no-param-reassign */
class PlayerAddForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    const { dispatch } = this.props;
    const first = evt.target[0].value;
    const last = evt.target[1].value;
    evt.preventDefault();
    if (first !== '' && last !== '') {
      const id = Date.now();
      dispatch(actions.addPlayer({ id, first, last, checked: true }));
    }
    evt.target[0].value = '';
    evt.target[1].value = '';
  }
  render() {
    return (
      <div className="player-add">
        <h4>Add New Player:</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
          <button className="button">Add</button>
        </form>
      </div>
    );
  }
}

export default connect()(PlayerAddForm);

PlayerAddForm.propTypes = {
  dispatch: PropTypes.func,
};
