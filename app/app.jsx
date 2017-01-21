import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
/* eslint-disable */
import * as actions from 'settingsActions';
import firebase from 'firebaseConfig';
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
    store.dispatch(actions.login(player.id));
    // Add player name if blank (first login)
    const settings = store.getState().settings;
    if (!settings.firstName) {
      const nameArr = player.name.split(' ');
      const first = nameArr[0];
      const last = nameArr[nameArr.length - 1];
      store.dispatch(actions.updateUserInfo({
        user: {
          id: player.id,
          first,
          last,
          hdcp: 0,
          roundId: 'player1',
        },
      }));
    }
    // TODO: fetch data from firebase
    browserHistory.push('/start');
  } else {
    store.dispatch(actions.logout());
    browserHistory.push('/');
  }
});

store.subscribe(() => {
  // const state = store.getState();
});

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
    document.getElementById('app')); //eslint-disable-line
