import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar';
import PlayerList from 'PlayerList';
import PlayerAddForm from 'PlayerAddForm';
/* eslint-enable */

const PlayerChoice = (props) => {
  const { dispatch, players, router, settings } = props;
  const mode = settings.scoringMode;
  const handleContinue = () => {
    let sum = 0;
    players.forEach(player => player.checked ? sum += 1 : sum); // eslint-disable-line
    if (sum <= 3) {
      // initiate the round object with selected players
      // set all checkmarks in players array to false
      // navigate to choose course screen
      router.push('/courses');
    } else {
      alert('Max of 3 players may be selected');
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
