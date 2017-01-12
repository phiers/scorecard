

const roundReducers = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYERS': {
      const players = action.players;
      return {
        ...state,
        players,
      };
    }
    case 'CANCEL_ROUND':
      return {};
    case 'SELECT_COURSE': {
      const courseId = action.id;
      return {
        ...state,
        courseId,
      };
    }
    case 'SET_HANDICAPS': {
      const player = state.players.find(p => p.id === action.id);
      player.hdcp = action.hdcp;
      return {
        ...state,
      };
    }
    case 'SETUP_SCORING': {
      const player = state.players.find(p => p.id === action.id);
      player.scores = action.scores;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default roundReducers;
