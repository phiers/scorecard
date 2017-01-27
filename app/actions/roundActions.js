import { firebaseRef } from 'firebaseConfig'; // eslint-disable-line

export function addPlayers(players) {
  return {
    type: 'ADD_PLAYERS',
    players,
  };
}

export function startAddPlayers(players) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    // start at root of user's data
    const ref = firebaseRef.child(`users/${uid}/round/players`);
    // add one at a time so each gets its own id node
    players.forEach(player => ref.push(player));
  };
}

function cancelRound() {
  return {
    type: 'CANCEL_ROUND',
  };
}

export function startCancelRound() {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundRef = firebaseRef.child(`users/${uid}/round`);
    return roundRef.remove().then(() => {
      dispatch(cancelRound());
    });
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

export function startSaveHoleScore(id, hole, score) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const courseHolesRef = firebaseRef.child(`users/${uid}/round/course/holeData`);
    courseHolesRef.once('value').then((snapshot) => {
      snapshot.forEach((holeData) => {
        if (holeData.val().holeNo === hole) {
          courseHolesRef.child(holeData.key).update({ [id]: score })
          .then(() => {
            dispatch(saveHoleScore(id, hole, score));
          });
        }
      });
    });
  };
}

export function startSavePlayerScore(id, hole, score) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundPlayersRef = firebaseRef.child(`users/${uid}/round/players`);
    roundPlayersRef.once('value').then((snap) => {
      snap.forEach((player) => {
        if (player.val().roundId === id) {
          // grab key for the player's node
          const key = player.key;
          const holeNo = hole - 1; // an array, so just find the index
          // update values on node for hdcp and roundId
          return roundPlayersRef.child(key).child(`scores/${holeNo}`).update({ score });
        }
        return false;
      });
    });
  };
}

export function selectCourse(course) {
  return {
    type: 'SELECT_COURSE',
    course,
  };
}

export function startSelectCourse(course) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundRef = firebaseRef.child(`users/${uid}/round/course`);
    return roundRef.update(course);
  };
}

function setHandicapsAndRoundId(id, hdcp, roundId) {
  return {
    type: 'SET_HANDICAPS_AND_ROUND_ID',
    id,
    hdcp,
    roundId,
  };
}
// this params in this function are for one player at a time
export function startSetHandicapsAndRoundId(id, hdcp, roundId) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundPlayersRef = firebaseRef.child(`users/${uid}/round/players`);
    roundPlayersRef.once('value').then((snap) => {
      snap.forEach((player) => {
        if (player.val().id === id) {
          // grab key for the player's node
          const key = player.key;
          // update values on node for hdcp and roundId
          return roundPlayersRef.child(key).update({ hdcp, roundId }).then(() => {
            dispatch(setHandicapsAndRoundId(id, hdcp, roundId));
          });
        }
        return false;
      });
    });
  };
}

export function setupScoring(id, scores) {
  return {
    type: 'SETUP_SCORING',
    id,
    scores,
  };
}

export function startSetupScoring(id, scores) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundPlayersRef = firebaseRef.child(`users/${uid}/round/players`);
    roundPlayersRef.once('value').then((snap) => {
      snap.forEach((player) => {
        if (player.val().id === id) {
          // grab key for the player's node
          const key = player.key;
          // update values on node for hdcp and roundId
          return roundPlayersRef.child(key).update({ scores }).then(() => {
            dispatch(setupScoring(id, scores));
          });
        }
        return false;
      });
    });
  };
}

function updateLastHole(hole) {
  return {
    type: 'UPDATE_LAST_HOLE',
    hole,
  };
}

export function startUpdateLastHole(hole) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundRef = firebaseRef.child(`users/${uid}/round`);
    return roundRef.update({ lastHole: hole }).then(() => {
      dispatch(updateLastHole(hole));
    });
  };
}

function fetchActiveRound(round) {
  return {
    type: 'FETCH_ROUND',
    round,
  };
}

export function startFetchActiveRound() {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundRef = firebaseRef.child(`users/${uid}/round`);
    return roundRef.once('value').then((snapshot) => {
      if (snapshot.val() !== null) {
        const players = snapshot.val().players;
        // App expects players as an array, so need to convert
        const playersArray = [];
        Object.keys(players).forEach((playerId) => {
          playersArray.push({
            id: playerId,
            ...players[playerId], //grab the player object with this id
          });
        });
        const round = { ...snapshot.val(), players: playersArray };
        dispatch(fetchActiveRound(round));
      }
    });
  };
}

export function startArchiveRound() {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundRef = firebaseRef.child(`users/${uid}/round`);
    const archivedRoundRef = firebaseRef.child(`users/${uid}/archivedRounds`);
    return roundRef.once('value').then((snapshot) => {
      const round = snapshot.val();
      const id = archivedRoundRef.push().key;
      const dateObj = new Date();
      const date = formatDate(dateObj); // eslint-disable-line
      const players = round.players;
      // App expects an array, so need to convert
      const playersArray = [];
      Object.keys(players).forEach((playerId) => {
        playersArray.push({
          id: playerId,
          ...players[playerId], //grab the player object with this id
        });
      });
      const archivedRound = {
        ...round,
        players: playersArray,
        id,
        date,
      };
      archivedRoundRef.push(archivedRound);
      dispatch(startCancelRound());
    });
  };
}

function formatDate(date) {
  const d = new Date(date);
  let month = d.getMonth() + 1;
  let day = d.getDate();
  const year = d.getFullYear() - 2000;

  day = day > 9 ? day : `0${day}`;
  month = month > 9 ? month : `0${month}`;

  return [month, day, year].join('/');
}
