import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import PlayerList from 'PlayerList';
import PlayerAddForm from 'PlayerAddForm';
import * as roundActions from 'roundActions';
/* eslint-enable */

const PlayerChoice = (props) => {
  const { dispatch, players, router, settings, round } = props;
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
      dispatch(roundActions.startAddPlayers(chosen));

      // navigate to choose course screen or, if editing, round information screen
      if (!round.course) {
        router.push('/courses');
      } else {
        router.push('/round');
      }
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

  const goHomeButton = () => (
    <button
      className="button tiny"
      onClick={() => props.router.push('/start')}
    > Main Menu</button>
  );

  const renderMessage = () => {
    if (!mode) {
      return <p><strong>To edit a player, delete and re-add</strong></p>;
    }
    return null;
  };
  const renderButton = () => {
    if (mode) {
      return <button className="button warning" onClick={handleContinue}>Continue</button>;
    }
    return null;
  };

  return (
    <div>
      <TitleBar left={goHomeButton()} title={renderTitle()} />
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
  round: PropTypes.object,
  router: PropTypes.object,
  settings: PropTypes.object,
};
