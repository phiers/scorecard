import { createStore, combineReducers } from 'redux';
/* eslint-disable */
import playerReducers from 'playerReducers';
import settingsReducers from 'settingsReducers';
/* eslint-enable */

const reducer = combineReducers({
  players: playerReducers,
  settings: settingsReducers,
});

const store = createStore(reducer, {});

export default store;
