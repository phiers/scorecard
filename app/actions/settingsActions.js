
const settingsActions = {
  setSelectionMode(mode) {
    return {
      type: 'SET_SELECTION_MODE',
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
