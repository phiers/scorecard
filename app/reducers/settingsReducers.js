const initialState = {
  first: 'None',
  last: 'None',
  hdcp: 0,
};

const settingsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_INFO':
      return {
        ...action.user,
      };
    default:
      return state;
  }
};

export default settingsReducers;
