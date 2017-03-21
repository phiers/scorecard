import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { startAddGroupRound } from 'groupRoundActions'; // eslint-disable-line
import { startSetGroupMode } from 'settingsActions'; // eslint-disable-line
import TitleBar from 'TitleBar'; // eslint-disable-line

const GroupRoundAdd = (props) => {
  const { router, dispatch } = props;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = evt.target[0].value;
    if (name !== '') {
      dispatch(startAddGroupRound(name));
      dispatch(startSetGroupMode(true));
      router.push('/courses');
    }
  };

  const goBackButton = () => (
    <button
      className="button tiny"
      onClick={() => router.push('/round-menu')}
    > Round Menu</button>
  );

  return (
    <div>
      <TitleBar left={goBackButton()} title="Add Group Round" />
      <div className="settings">
        <h3>Please enter a recognizable round name</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Group Round Name</label>
          <input type="text" id="name" />
          <button className="button expanded">Continue</button>
        </form>
      </div>
    </div>
  );
};

GroupRoundAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired, // eslint-disable-line
};

export default connect()(GroupRoundAdd);
