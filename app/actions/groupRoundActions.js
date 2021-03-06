import { firebaseRef } from 'firebaseConfig'; // eslint-disable-line

function addGroupRound(round) {
  return {
    type: 'ADD_GROUP_ROUND',
    round,
  };
}

export function startAddGroupRound(groupName, sponsor) {
  return (dispatch) => {
    const publicRef = firebaseRef.child('public');
    const id = publicRef.push().key;
    const newRound = {
      name: groupName,
      id,
      checked: false,
      course: false,
      sponsor,
    };
    return publicRef.push(newRound)
    .then(dispatch(addGroupRound(newRound)));
  };
}
// TODO: no reducer -- add to some firebase api file? See bigger ? about groups in redux state
export function addPlayersToGroup(groupKey, players) {
  return () => {
    const publicRef = firebaseRef.child('public');
    return publicRef.once('value').then((snap) => {
      snap.forEach((group) => {
        if (group.val().id === groupKey) {
          publicRef.child(`${group.key}`).push(players);
        }
        return false;
      });
    });
  };
}

function cancelGroupRound() {
  return {
    type: 'CANCEL_GROUP_ROUND',
  };
}

export function startCancelGroupRound(groupRoundId) {
  return (dispatch) => {
    const roundRef = firebaseRef.child(`public/${groupRoundId}/round`);
    return roundRef.remove().then(() => {
      dispatch(cancelGroupRound());
    });
  };
}

function selectGroup(id, key) {
  return {
    type: 'SELECT_GROUP',
    id,
    key,
  };
}

export function startSelectGroup(id) {
  console.log('passed ID', id);
  return (dispatch) => {
    const publicRef = firebaseRef.child('public');
    publicRef.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        if (child.val().id === id) {
          return publicRef.child(child.key).update({ checked: !child.val().checked })
          // add the key so it can be used to post from public round
          .then(() => dispatch(selectGroup(id, child.key)));
        }
        return false;
      });
    });
  };
}

export function saveGroupPlayerScore(groupKey, playerId, score, hole) {
  return () => {
    const ref = firebaseRef.child('public');
    ref.once('value').then((snap) => {
      snap.forEach((node) => {
        if (node.val().id === groupKey) {
          node.forEach((playerArray) => {
            playerArray.forEach((player) => {
              if (player.val().id === playerId) {
                // update scores
                ref.child(`${node.key}/${playerArray.key}/${player.key}/scores`).update({ [hole]: score });
                // update last hole if not editing
                if (player.val().lastHole < hole || !player.val().lastHole) {
                  ref.child(`${node.key}/${playerArray.key}/${player.key}`).update({ lastHole: hole });
                }
              }
            });
          });
        }
      });
    });
  };
}

function fetchGroupRoundList(list) {
  return {
    type: 'FETCH_GROUP_ROUND_LIST',
    list,
  };
}

export function startFetchGroupRoundList() {
  return (dispatch) => {
    const publicRef = firebaseRef.child('public').limitToLast(20);
    return publicRef.once('value').then((snapshot) => {
      if (snapshot.val() !== null) {
        const rounds = snapshot.val();
        const listArray = [];
        Object.keys(rounds).forEach((roundId) => {
          listArray.push({
            id: roundId,
            ...rounds[roundId],
          });
        });
        dispatch(fetchGroupRoundList(listArray));
      }
    });
  };
}
