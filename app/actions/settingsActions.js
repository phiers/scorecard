import firebase, { firebaseRef } from 'firebaseConfig'; // eslint-disable-line

export function setUserId(id) {
  return {
    type: 'SET_USER_ID',
    id,
  };
}
// despite its name, this function just removes the user.id property
export function logout() {
  return {
    type: 'LOGOUT',
  };
}

export function fetchSettings(settings) {
  return {
    type: 'FETCH_SETTINGS',
    settings,
  };
}
// synch settings state and database
export function startFetchSettings() {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const settingsRef = firebaseRef.child(`users/${uid}/settings`);
    return settingsRef.once('value').then((snapshot) => {
      dispatch(fetchSettings(snapshot.val()));
    });
  };
}

export function setScoringMode(mode) {
  return {
    type: 'SET_SCORING_MODE',
    mode,
  };
}

export function startSetScoringMode(mode) {
  return (dispatch, getState) => {
    const user = getState().settings.user;
    const uid = user.id;
    const settingsRef = firebaseRef.child(`users/${uid}/settings`);
    const update = {
      scoringMode: mode,
      user,
    };
    return settingsRef.update(update).then(() => {
      dispatch(setScoringMode(mode));
    });
  };
}

export function updateUserInfo(user) {
  return {
    type: 'UPDATE_USER_INFO',
    user,
  };
}
/* This function dispatches an action to either:
* a. Set up user on db on first login and then set redux state to match; or
  b. Synch app state with database.
*/
export function initializeUserInfo(user) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const settingsRef = firebaseRef.child(`users/${uid}/settings`);
    return settingsRef.once('value').then((snap) => {
      if (snap.val() === null) {
        return settingsRef.update(user).then(() => {
          dispatch(updateUserInfo(user));
        });
      }
      // if user already exists in db ...
      return dispatch(startFetchSettings());
    });
  };
}

export function startUpdateUserInfo(user) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const settingsRef = firebaseRef.child(`users/${uid}/settings`);
    return settingsRef.update(user).then(() => {
      dispatch(updateUserInfo(user));
    });
  };
}
