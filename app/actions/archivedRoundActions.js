import { firebaseRef } from 'firebaseConfig'; // eslint-disable-line

export function archiveRound(round) {
  return {
    type: 'ARCHIVE_ROUND',
    round,
  };
}

function removeRound(id) {
  return {
    type: 'REMOVE_ROUND',
    id,
  };
}

export function startRemoveRound(id) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundRef = firebaseRef.child(`users/${uid}/archivedRounds`);
    roundRef.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        // find the node selected for deletion
        if (child.val().id === id) {
          // the child.key appended to coursesRef is the path to remove
          return roundRef.child(child.key).remove()
            .then(() => dispatch(removeRound(id)));
        }
        return false;
      });
    });
  };
}

function fetchArchivedRound(round) {
  return {
    type: 'FETCH_ARCHIVED_ROUND',
    round,
  };
}

export function startFetchArchivedRounds() {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundRef = firebaseRef.child(`users/${uid}/archivedRounds`).limitToLast(20);
    return roundRef.once('value').then((snapshot) => {
      if (snapshot.val() !== null) {
        snapshot.forEach((round) => {
          dispatch(fetchArchivedRound(round.val()));
        });
      }
    });
  };
}
