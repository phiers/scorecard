import { firebaseRef } from 'firebaseConfig'; // eslint-disable-line

function addGroupRound(round) {
  return {
    type: 'ADD_GROUP_ROUND',
    round,
  };
}

export function startAddGroupRound(name) {
  return (dispatch) => {
    const publicRef = firebaseRef.child('public');
    const id = publicRef.push().key;
    const newRound = { name, id, checked: false, course: false };
    publicRef.push(newRound)
    .then(dispatch(addGroupRound(newRound)));
  };
}

function selectCourse(id, course) {
  return {
    type: 'SELECT_COURSE',
    course,
  };
}

export function startSelectCourse(id, course) {
  return (dispatch) => {
    const publicRef = firebaseRef.child('public');
    return publicRef.once('value').then((snap) => {
      snap.forEach((group) => {
        if (group.val().id === id) {
          return publicRef.child(group.key).update({ course })
          .then(() => dispatch(selectCourse(id, course)));
        }
        return false;
      });
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
