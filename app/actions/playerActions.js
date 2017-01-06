const playerActions = {
  addPlayer(newPlayer) {
    return {
      type: 'ADD_PLAYER',
      newPlayer,
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
