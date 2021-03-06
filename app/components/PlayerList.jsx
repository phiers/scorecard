import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
/* eslint-disable */
import TitleBar from 'TitleBar'; // eslint-disable-line
import Player from 'Player'; // eslint-disable-line
import * as actions from 'playerActions';
/* eslint-enable */
/* eslint-disable no-confusing-arrow */
const PlayerList = (props) => {
  const { players } = props;
  // two render functions to add selected to top of the list
  const selectedPlayers = players
    .filter((player) => {
      if (player.checked) {
        return true;
      }
      return false;
    }).sort((a, b) => a.last > b.last ? 1 : -1);
  const unSelectedPlayers = players
    .filter((player) => {
      if (!player.checked) {
        return true;
      }
      return false;
    }).sort((a, b) => a.last > b.last ? 1 : -1);
  const renderSelectedPlayers = () => selectedPlayers.map(player =>
    <Player key={player.id} {...player} />,
  );
  const renderUnselectedPlayers = () => unSelectedPlayers.map(player =>
    <Player key={player.id} {...player} />,
  );

  return (
    <div className="player">
      <ul>
        {renderSelectedPlayers()}
        {renderUnselectedPlayers()}
      </ul>
    </div>
  );
};

export default connect(state => state)(PlayerList); // narrow state to players

PlayerList.propTypes = {
  players: PropTypes.array, // eslint-disable-line
};
