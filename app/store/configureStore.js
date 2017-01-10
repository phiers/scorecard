import { createStore, combineReducers } from 'redux';
/* eslint-disable */
import courseReducers from 'courseReducers';
import playerReducers from 'playerReducers';
import roundReducers from 'roundReducers';
import settingsReducers from 'settingsReducers';
/* eslint-enable */

const reducer = combineReducers({
  courses: courseReducers,
  players: playerReducers,
  round: roundReducers,
  settings: settingsReducers,
});

const store = createStore(reducer, {});

export default store;
