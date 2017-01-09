const initialPlayers = [
  { id: 1, last: 'Crawford', first: 'Dave', checked: false },
  { id: 2, last: 'Hickman', first: 'Tim', checked: false },
  { id: 3, last: 'Staley', first: 'Scott', checked: false },
  { id: 4, last: 'Atkinson', first: 'John', checked: false },
  { id: 5, last: 'Sprankle', first: 'Fred', checked: false },
  { id: 6, last: 'DeMattio', first: 'Don', checked: false },
  { id: 7, last: 'Michael', first: 'Ed', checked: false },
  { id: 8, last: 'Banner', first: 'John', checked: false },
  { id: 9, last: 'Kristoff', first: 'Jeff', checked: false },
  { id: 10, last: 'Uhlman', first: 'Jim', checked: false },
  { id: 11, last: 'Zimmerman', first: 'Andy', checked: false },
];

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
