const archivedRoundReducers = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ARCHIVED_ROUND': {
      const round = action.round;
      return [...state, round];
    }
    case 'REMOVE_ROUND':
      return state.filter((round) => {
        if (round.id === action.id) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
};

export default archivedRoundReducers;
