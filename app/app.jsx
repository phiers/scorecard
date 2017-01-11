import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
/* eslint-disable */
import Main from 'Main';
import Start from 'Start';
import Settings from 'Settings';
import PlayerChoice from 'PlayerChoice';
import Course from 'Course';
import CourseAdd from 'CourseAdd';
import CourseChoice from 'CourseChoice';
import CourseEdit from 'CourseEdit';
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
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <Route path="players" component={PlayerChoice} />
        <Route path="course/:id" component={Course} />
        <Route path="add-course" component={CourseAdd} />
        <Route path="edit-course/:id" component={CourseEdit} />
        <Route path="courses" component={CourseChoice} />
        <Route path="settings" component={Settings} />
        <IndexRoute component={Start} />
      </Route>
    </Router>
  </Provider>,
    document.getElementById('app')); //eslint-disable-line
