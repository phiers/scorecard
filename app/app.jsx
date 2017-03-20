import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
/* eslint-disable */
import {setUserId, initializeUserInfo, logout} from 'settingsActions';
import firebase, { firebaseRef } from 'firebaseConfig'
import loadData from 'initialFetch';
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
    // userId determines all paths in firebase, so it must be set first
    store.dispatch(setUserId(player.id));
    // Add user if first login; otherwise, initialize user info with firebase data
    const nameArr = player.name.split(' ');
    const first = nameArr[0];
    const last = nameArr[nameArr.length - 1];
    store.dispatch(initializeUserInfo({
      user: {
        id: player.id,
        first,
        last,
        roundId: 'player1',
      },
    }));
    // add data from firebase
    loadData();
    browserHistory.push('/start');
  } else {
    store.dispatch(logout());
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
    document.getElementById('app'));
