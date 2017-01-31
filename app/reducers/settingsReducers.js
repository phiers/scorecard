const initialState = {
  user: { roundId: 'playerNo1' },
  scoringMode: false,
};

const settingsReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER_ID': {
      const user = {
        ...state.user,
        id: action.id,
      };
      return {
        ...state,
        user,
      };
    }
    case 'LOGOUT':
      return {
        ...state,
        user: {
          ...state.user,
          id: undefined,
        },
      };
    case 'SET_GROUP_MODE':
      return {
        ...state,
        groupMode: action.mode,
      };
    case 'SET_SCORING_MODE':
      return {
        ...state,
        scoringMode: action.mode,
      };
    case 'FETCH_SETTINGS':
      return {
        ...state,
        ...action.settings,
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
