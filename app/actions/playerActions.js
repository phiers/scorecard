import firebase from 'firebaseConfig'; // eslint-disable-line


export function addPlayer(newPlayer) {
  return {
    type: 'ADD_PLAYER',
    newPlayer,
  };
}

export function removePlayer(id) {
  return {
    type: 'REMOVE_PLAYER',
    id,
  };
}

export function selectPlayer(id) {
  return {
    type: 'SELECT_PLAYER',
    id,
  };
}
