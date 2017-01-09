const initialState = {
  user: {
    first: 'None',
    last: 'None',
    hdcp: 0,
  },
  selectionMode: false,
};

const settingsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTION_MODE':
      return {
        ...state,
        selectionMode: action.mode,
      };
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
