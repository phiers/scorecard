
export function addPlayers(players) {
  return {
    type: 'ADD_PLAYERS',
    players,
  };
}

export function cancelRound() {
  return {
    type: 'CANCEL_ROUND',
  };
}

export function saveHoleScore(id, hole, score) {
  return {
    type: 'SAVE_HOLE_SCORE',
    id,
    hole,
    score,
  };
}

export function selectCourse(course) {
  return {
    type: 'SELECT_COURSE',
    course,
  };
}

export function setHandicapsAndRoundId(id, hdcp, roundId) {
  return {
    type: 'SET_HANDICAPS_AND_ROUND_ID',
    id,
    hdcp,
    roundId,
  };
}

export function setupScoring(id, scores) {
  return {
    type: 'SETUP_SCORING',
    id,
    scores,
  };
}

export function updateLastHole(hole) {
  return {
    type: 'UPDATE_LAST_HOLE',
    hole,
  };
}
