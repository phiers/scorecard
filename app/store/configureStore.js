import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
/* eslint-disable */
import archivedRoundReducers from 'archivedRoundReducers';
import courseReducers from 'courseReducers';
import groupRoundReducers from 'groupRoundReducers';
import playerReducers from 'playerReducers';
import roundReducers from 'roundReducers';
import settingsReducers from 'settingsReducers';
/* eslint-enable */

const reducer = combineReducers({
  courses: courseReducers,
  groupRounds: groupRoundReducers,
  players: playerReducers,
  round: roundReducers,
  archivedRounds: archivedRoundReducers,
  settings: settingsReducers,
});

const logger = createLogger();

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

export default store;
