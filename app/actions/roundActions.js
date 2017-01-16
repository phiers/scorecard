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
  selectCourse(course) {
    return {
      type: 'SELECT_COURSE',
      course,
    };
  },
  setHandicapsAndRoundId(id, hdcp, roundId) {
    return {
      type: 'SET_HANDICAPS_AND_ROUND_ID',
      id,
      hdcp,
      roundId,
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
