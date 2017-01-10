
const settingsActions = {
  setScoringMode(mode) {
    return {
      type: 'SET_SCORING_MODE',
      mode,
    };
  },
  updateUserInfo(user) {
    return {
      type: 'UPDATE_USER_INFO',
      user,
    };
  },
};

export default settingsActions;
