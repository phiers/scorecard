const initialState = {
  user: {
    id: 'user',
    first: 'Paul',
    last: 'Hiers',
    hdcp: 4,
    roundId: 'playerNo1',
  },
  scoringMode: false,
};

const settingsReducers = (state = initialState, action) => {
  switch (action.type) {
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
