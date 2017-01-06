import { createStore, combineReducers } from 'redux';
import playerReducer from 'playerReducers'; // eslint-disable-line

const reducer = combineReducers({
  players: playerReducer,
});

const store = createStore(reducer, {});

export default store;
