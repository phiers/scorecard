const archivedRoundReducers = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ARCHIVED_ROUND':
      const round = action.round;
      return [...state, round];
    default:
      return state;
  }
};

export default archivedRoundReducers;
