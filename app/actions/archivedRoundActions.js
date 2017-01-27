import { firebaseRef } from 'firebaseConfig'; // eslint-disable-line

function fetchArchivedRound(round) {
  return {
    type: 'FETCH_ARCHIVED_ROUND',
    round,
  };
}

export function startFetchArchivedRounds() {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const roundRef = firebaseRef.child(`users/${uid}/archivedRounds`);
    return roundRef.once('value').then((snapshot) => {
      if (snapshot.val() !== null) {
        snapshot.forEach((round) => {
          dispatch(fetchArchivedRound(round.val()));
        });
      }
    });
  };
}
