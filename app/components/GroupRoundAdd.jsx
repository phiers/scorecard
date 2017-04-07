import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import { startAddGroupRound } from 'groupRoundActions';
import { startSetGroupMode } from 'settingsActions';
import TitleBar from 'TitleBar';
/* eslint-enable */

const GroupRoundAdd = (props) => {
  const { router, dispatch, user } = props;

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const groupName = evt.target[0].value;
    const sponsor = `${user.first} ${user.last}`;
    if (groupName !== '') {
      dispatch(startAddGroupRound(groupName, sponsor));
      router.push('round-menu');
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
          <button className="button expanded">Add</button>
        </form>
      </div>
    </div>
  );
};

GroupRoundAdd.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired, // eslint-disable-line
  user: PropTypes.object.isRequired, // eslint-disable-line
};

const mapStateToProps = (state) => { // eslint-disable-line
  return {
    user: state.settings.user,
  };
};

export default connect(mapStateToProps)(GroupRoundAdd);
