import { firebaseRef } from 'firebaseConfig'; // eslint-disable-line
import initialPlayers from 'defaultPlayers'; // eslint-disable-line

function addPlayer(newPlayer) {
  return {
    type: 'ADD_PLAYER',
    newPlayer,
  };
}

export function startAddPlayer(player) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const playersRef = firebaseRef.child(`users/${uid}/players`);
    const key = playersRef.push().key;
    const newPlayer = {
      ...player,
      id: key,
    };
    return playersRef.push(newPlayer).then(() => {
      dispatch(addPlayer(newPlayer));
    });
  };
}

function removePlayer(id) {
  return {
    type: 'REMOVE_PLAYER',
    id,
  };
}

export function startRemovePlayer(id) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const playersRef = firebaseRef.child(`users/${uid}/players`);
    playersRef.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        // find the node selected for deletion
        if (child.val().id === id) {
          // the child.key appended to playersRef is the path to remove
          return playersRef.child(child.key).remove()
            .then(() => dispatch(removePlayer(id)));
        }
        return false;
      });
    });
  };
}

function selectPlayer(id) {
  return {
    type: 'SELECT_PLAYER',
    id,
  };
}

export function startSelectPlayer(id) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const playersRef = firebaseRef.child(`users/${uid}/players`);
    playersRef.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().id === id) {
          return playersRef.child(child.key).update({ checked: !child.val().checked })
          .then(() => dispatch(selectPlayer(id)));
        }
        return false;
      });
    });
  };
}

function fetchPlayers(players) {
  return {
    type: 'FETCH_PLAYERS',
    players,
  };
}

export function startFetchPlayers() {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const playersRef = firebaseRef.child(`users/${uid}/players`);
    return playersRef.once('value').then((snapshot) => {
      if (snapshot.val() !== null) {
        const players = snapshot.val();
        // App expects an array, so need to convert
        const playersArray = [];
        Object.keys(players).forEach((playerId) => {
          playersArray.push({
            id: playerId,
            ...players[playerId], //grab the player object with this id
          });
        });
        dispatch(fetchPlayers(playersArray));
      } else {
        initialPlayers.forEach(player => dispatch(startAddPlayer(player)));
      }
    });
  };
}
