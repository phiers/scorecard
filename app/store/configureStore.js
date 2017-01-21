import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
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

const logger = createLogger();

const store = createStore(reducer, {}, applyMiddleware(thunk, logger));

export default store;
