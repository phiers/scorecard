import React from 'react';
/* eslint-disable */
import TitleBar from 'TitleBar';
import PlayerList from 'PlayerList';
import PlayerAddForm from 'PlayerAddForm';
/* eslint-enable */

const PlayerChoice = () => {
  return (
    <div>
      <TitleBar title="Choose Players" />
      <PlayerList />
      <PlayerAddForm />
    </div>
  );
};

export default PlayerChoice;
