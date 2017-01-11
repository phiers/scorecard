const roundActions = {
  addPlayers(players) {
    return {
      type: 'ADD_PLAYERS',
      players,
    };
  },
  selectCourse(id) {
    return {
      type: 'SELECT_COURSE',
      id,
    };
  },
};

export default roundActions;
