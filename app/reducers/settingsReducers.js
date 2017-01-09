const initialState = {
  user: {
    first: 'None',
    last: 'None',
    hdcp: 0,
  },
  gameSelect: false,
};

const settingsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...state,
        ...action.user,
      };
    default:
      return state;
  }
};

export default settingsReducers;
