import { createStore, combineReducers } from 'redux';
/* eslint-disable */
import courseReducers from 'courseReducers';
import playerReducers from 'playerReducers';
import settingsReducers from 'settingsReducers';
/* eslint-enable */

const reducer = combineReducers({
  courses: courseReducers,
  players: playerReducers,
  settings: settingsReducers,
});

const store = createStore(reducer, {});

export default store;
