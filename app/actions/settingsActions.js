
export function login(id) {
  return {
    type: 'LOGIN',
    id,
  };
}

export function logout() {
  return {
    type: 'LOGOUT',
  };
}

export function setScoringMode(mode) {
  return {
    type: 'SET_SCORING_MODE',
    mode,
  };
}

export function updateUserInfo(user) {
  return {
    type: 'UPDATE_USER_INFO',
    user,
  };
}
