import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TitleBar from 'TitleBar'; // eslint-disable-line
import Player from 'Player'; // eslint-disable-line

class PlayerList extends Component {
  render() {
    const { players } = this.props;
    console.log(players);
    // TODO: add checked players to top of list
    const sortedPlayers = players.sort((a, b) => a.last > b.last ? 1 : -1);
    const renderPlayers = () => sortedPlayers.map(player =>
      <Player key={player.id} {...player} />,
    );

    return (
      <div className="player">
        <ul>
          {renderPlayers()}
        </ul>
      </div>
    );
  }
}

export default connect(state => state)(PlayerList); // narrow state to players

PlayerList.propTypes = {
  players: PropTypes.array,
};
