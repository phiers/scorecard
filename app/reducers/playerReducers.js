import initialPlayers from 'defaultPlayers'; // eslint-disable-line

const playersReducers = (state = initialPlayers, action) => {
  switch (action.type) {
    case 'ADD_PLAYER': {
      return [...state, action.newPlayer];
    }
    case 'REMOVE_PLAYER':
      return state.filter((player) => {
        if (player.id === action.id) {
          return false;
        }
        return true;
      });
    case 'SELECT_PLAYER':
      return state.map((player) => {
        if (player.id === action.id) {
          const checked = !player.checked;
          return {
            ...player,
            checked,
          };
        }
        return player;
      });
    default:
      return state;
  }
};

export default playersReducers;
