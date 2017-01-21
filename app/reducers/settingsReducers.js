const initialState = {
  user: { roundId: 'playerNo1' },
  scoringMode: false,
};

const settingsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: { id: action.id },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: {
          ...state.user,
          id: undefined,
        },
      };
    case 'SET_SCORING_MODE':
      return {
        ...state,
        scoringMode: action.mode,
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
