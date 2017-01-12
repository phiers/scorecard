const roundActions = {
  addPlayers(players) {
    return {
      type: 'ADD_PLAYERS',
      players,
    };
  },
  cancelRound() {
    return {
      type: 'CANCEL_ROUND',
    };
  },
  selectCourse(id) {
    return {
      type: 'SELECT_COURSE',
      id,
    };
  },
  setHandicaps(id, hdcp) {
    return {
      type: 'SET_HANDICAPS',
      id,
      hdcp,
    };
  },
  setupScoring(id, scores) {
    return {
      type: 'SETUP_SCORING',
      id,
      scores,
    };
  },
};

export default roundActions;
