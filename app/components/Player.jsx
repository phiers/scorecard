import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as playerActions from 'playerActions'; // eslint-disable-line

const Player = (props) => {
  /* not ideal as player props passed from list rendering and settings state are
  intermingled */
  const { first, last, checked, dispatch, id, scoringMode } = props;
  const handleCheck = () => {
    dispatch(playerActions.startSelectPlayer(id));
  };
  const handleDelete = (evt) => {
    evt.preventDefault();
    dispatch(playerActions.startRemovePlayer(id));
  };
  const renderCheckbox = () => {
    if (scoringMode) {
      return <input type="checkbox" checked={checked} onChange={handleCheck} />;
    }
    return null;
  };

  // const renderDelete = () => {
  //   if (!scoringMode) {
  //     return <button className="button tiny alert" onClick={handleDelete}>Del</button>;
  //   }
  //   return null;
  // };
  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <div>
      <li>
        {renderCheckbox()}
        <span onClick={handleCheck}>{`${last}, ${first}`}</span>
        <button className="button tiny alert" onClick={handleDelete}>Del</button>
      </li>
    </div>
  );
};

Player.propTypes = {
  checked: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  first: PropTypes.string.isRequired,
  last: PropTypes.string.isRequired,
  scoringMode: PropTypes.bool.isRequired,
};

export default connect(state => state.settings)(Player);
