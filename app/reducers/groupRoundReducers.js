
const groupRoundReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_GROUP_ROUND':
      return [...state, action.round];

    case 'FETCH_GROUP_ROUND_LIST':
      return [...action.list];

    case 'SELECT_COURSE':
      return [...state, action.course];

    case 'SELECT_GROUP':
      return state.map((group) => {
        if (group.id === action.id) {
          const key = action.key;
          const checked = !group.checked;
          return {
            ...group,
            key,
            checked,
          };
        }
        return group;
      });

    default:
      return state;
  }
};

export default groupRoundReducers;
