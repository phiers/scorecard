import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import TitleBar from 'TitleBar'; // eslint-disable-line

const ManageMenu = (props) => {
  const { router } = props;

  const goBackButton = () => (
    <button
      className="button tiny"
      onClick={() => router.push('/start')}
    > Main Menu</button>
  );

  return (
    <div>
      <TitleBar left={goBackButton()} title="My Data" />
      <div className="start-page">
        <div className="column small-centered">
          <Link to="players" className="button large">My Players</Link>
        </div>
        <div className="column small-centered">
          <Link to="courses" className="button large">My Courses</Link>
        </div>
        <div className="column small-centered">
          <Link to="roundlist" className="button large">My Rounds</Link>
        </div>
        <div className="column small-centered">
          <Link to="group-round-manage" className=" button large">My Group Rounds</Link>
        </div>
        <div className="column small-centered">
          <Link to="settings" className="button large user-info">My User Info</Link>
        </div>
      </div>
    </div>
  );
};

ManageMenu.propTypes = {
  router: PropTypes.object.isRequired, // eslint-disable-line
};

export default ManageMenu;
