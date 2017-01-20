import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* eslint-disable */
import routes from 'routes';
import store from 'configureStore';

// Load foundation
$(document).foundation();
// App css
require('style!css!sass!applicationStyles');
/* eslint-enable */
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});
// TODO: add course show route (in below, but no programmed route)
ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
    document.getElementById('app')); //eslint-disable-line
