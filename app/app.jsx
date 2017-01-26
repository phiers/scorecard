import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
/* eslint-disable */
import * as settingsActions from 'settingsActions';
import * as playerActions from 'playerActions';
import * as courseActions from 'courseActions';
import * as roundActions from 'roundActions';
import firebase, {firebaseRef } from 'firebaseConfig';
import routes from 'routes';
import store from 'configureStore';

// Load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const player = {
      name: user.displayName,
      id: user.uid,
    };
    // userId determines all paths in firebase, so it must e set first
    store.dispatch(settingsActions.setUserId(player.id));
    // Add user if first login; otherwise, initialize user info with firebase data
    const nameArr = player.name.split(' ');
    const first = nameArr[0];
    const last = nameArr[nameArr.length - 1];
    store.dispatch(settingsActions.initializeUserInfo({
      user: {
        id: player.id,
        first,
        last,
        roundId: 'player1',
      },
    }));
    // add player and course data from database
    store.dispatch(playerActions.startFetchPlayers());
    store.dispatch(courseActions.startFetchCourses());
    store.dispatch(roundActions.startFetchActiveRound());

    browserHistory.push('/start');
  } else {
    store.dispatch(settingsActions.logout());
    browserHistory.push('/');
  }
});

store.subscribe(() => {
  store.getState();
});

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
    document.getElementById('app')); //eslint-disable-line
