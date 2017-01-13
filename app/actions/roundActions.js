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
  saveHoleScore(id, hole, score) {
    return {
      type: 'SAVE_HOLE_SCORE',
      id,
      hole,
      score,
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
  updateLastHole(hole) {
    return {
      type: 'UPDATE_LAST_HOLE',
      hole,
    };
  },
};

export default roundActions;
