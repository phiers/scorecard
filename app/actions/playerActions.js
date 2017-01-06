const playerActions = {
  addPlayer(newPlayer) {
    return {
      type: 'ADD_PLAYER',
      newPlayer,
    };
  },
  removePlayer(id) {
    return {
      type: 'REMOVE_PLAYER',
      id,
    };
  },
  selectPlayer(id) {
    return {
      type: 'SELECT_PLAYER',
      id,
    };
  },
};

export default playerActions;
