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
      alert('YOU HAVE ADDED MORE THAN THREE PLAYERS');  // eslint-disable-line
    }
  };

  const renderTitle = () => {
    if (mode) {
      return 'Choose Players';
    }
    return 'Manage Players';
  };

  // render goBack button
  const text = mode ? 'Cancel' : 'Main Menu';
  const routerPath = () => {
    if (mode) {
      return props.router.push('/round-menu');
    }
    return props.router.push('/start');
  };
  const goBackButton = () => (
    <button
      className="button tiny"
      onClick={() => routerPath()}
    > {text}</button>
  );

  const renderMessage = () => {
    if (!mode) {
      return <p><strong>To edit a player, delete and re-add</strong></p>;
    }
    return null;
  };

  const continueButton = () => {
    if (mode) {
      return <button className="button tiny" onClick={handleContinue}>Continue</button>;
    }
    return null;
  };

  return (
    <div>
      <TitleBar left={goBackButton()} title={renderTitle()} right={continueButton()} />
      <div className="player-choice">
        <PlayerAddForm />
        {renderMessage()}
        <PlayerList />
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
