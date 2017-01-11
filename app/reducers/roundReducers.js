

const roundReducers = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYERS': {
      const players = action.players;
      return {
        ...state,
        players,
      };
    }
    case 'SELECT_COURSE': {
      const courseId = action.id;
      return {
        ...state,
        courseId,
      };
    }

    default:
      return state;
  }
};

export default roundReducers;
