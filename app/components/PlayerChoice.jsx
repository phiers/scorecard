import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import PlayerList from 'PlayerList';
import PlayerAddForm from 'PlayerAddForm';
import roundActions from 'roundActions';
/* eslint-enable */

const PlayerChoice = (props) => {
  const { dispatch, players, router, settings } = props;
  const mode = settings.scoringMode;
  const handleContinue = () => {
    // create array of selected players
    const chosen = [];
    players.forEach((player) => {
      if (player.checked) {
        chosen.push(player);
      }
    });
    if (chosen.length <= 3) {
      // initiate the round object with selected players' names
      const p1 = settings.user;
      chosen.unshift(p1);
      dispatch(roundActions.addPlayers(chosen));

      // navigate to choose course screen
      router.push('/courses');
    } else {
      alert('YOU HAVE ADDED MORE THAN THREE PLAYERS');
    }
  };
  const renderTitle = () => {
    if (mode) {
      return 'Choose Players';
    }
    return 'Manage Players';
  };
  const renderMessage = () => {
    if (!mode) {
      return <p>To edit a player, just delete and re-add</p>;
    }
    return null;
  };
  const renderButton = () => {
    if (mode) {
      return <button className="button warning" onClick={handleContinue}>Continue</button>;
    }
    return <button className="button" onClick={() => router.push('/')}>Cancel</button>;
  };

  return (
    <div>
      <TitleBar title={renderTitle()} />
      <div className="player-choice">
        <PlayerAddForm />
        {renderMessage()}
        <PlayerList />
        {renderButton()}
      </div>
    </div>
  );
};

export default connect(state => state)(PlayerChoice);
/* eslint-disable react/forbid-prop-types */
PlayerChoice.propTypes = {
  dispatch: PropTypes.func,
  players: PropTypes.array,
  router: PropTypes.object,
  settings: PropTypes.object,
};
