import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import playerActions from 'playerActions'; // eslint-disable-line

class Player extends Component {
  render() {
    const { first, last, checked, dispatch, id } = this.props;
    const handleCheck = () => {
      dispatch(playerActions.selectPlayer(id));
    };
    return (
      <div>
        <li>
          <input type="checkbox" checked={checked} onChange={handleCheck} />
          <span>{`${last}, ${first}`}</span>
        </li>
      </div>
    );
  }
}

Player.propTypes = {
  checked: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,
  id: PropTypes.number,
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
};

export default connect()(Player);
