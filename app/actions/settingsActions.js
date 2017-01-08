
const settingsActions = {
  updateUserInfo(user) {
    return {
      type: 'UPDATE_USER_INFO',
      user,
    };
  },
};

export default settingsActions;
