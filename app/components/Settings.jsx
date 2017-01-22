import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import * as actions from 'settingsActions'; // eslint-disable-line
import TitleBar from 'TitleBar'; // eslint-disable-line
/* eslint-disable no-param-reassign */

const Settings = (props) => {
  const { router, startUpdateUserInfo } = props;
  const { first, last, hdcp, id, roundId } = props.settings;
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const firstName = evt.target[0].value;
    const lastName = evt.target[1].value;
    const handicap = evt.target[2].value || 0;
    if (firstName !== '' && lastName !== '') {
      startUpdateUserInfo({
        user: {
          id,
          first: firstName,
          last: lastName,
          hdcp: handicap,
          roundId,
        },
      });
      router.push('/start');
    }
    evt.target[0].value = '';
    evt.target[1].value = '';
    evt.target[2].value = '';
  };
  return (
    <div>
      <TitleBar title="Settings" />
      <div className="settings">
        <h3>Enter or update your information:</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" defaultValue={first} />
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" defaultValue={last} />
          <label htmlFor="hdcp">Handicap</label>
          <input type="text" id="hcdp" defaultValue={hdcp} />
          <button className="button expanded">Submit</button>
        </form>
      </div>
    </div>
  );
};

Settings.propTypes = {
  router: PropTypes.object.isRequired, // eslint-disable-line
  settings: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    hdcp: PropTypes.string,
    id: PropTypes.string.isRequired,
    roundId: PropTypes.string.isRequired,
  }),
  startUpdateUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => { // eslint-disable-line
  return {
    settings: state.settings.user,
  };
};

export default connect(mapStateToProps, actions)(Settings);
