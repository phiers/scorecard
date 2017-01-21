import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

/* eslint-disable */
import firebase from 'firebaseConfig';
import Login from 'Login';
import Main from 'Main';  // TODO: not using, but worried to delete
import PlayerChoice from 'PlayerChoice';
import Course from 'Course';
import CourseAdd from 'CourseAdd';
import CourseEdit from 'CourseEdit';
import CourseChoice from 'CourseChoice';
import Round from 'Round';
import RoundHole from 'RoundHole';
import RoundHoleEdit from 'RoundHoleEdit';
import RoundSummary from 'RoundSummary';
import Scorecard from 'Scorecard';
import Settings from 'Settings';
import Start from 'Start';
/* eslint-enable */

// redirect user if not logged in
const requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};
// redirect if logged in
// TODO: make this more sophisticated? if round in progress, go to scorecard?
const redirectIfLoggedIn = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/start');
  }

  next();
};


export default (
  <Router history={browserHistory}>
    <Route path="/">
      <Route path="start" component={Start} onEnter={requireLogin} />
      <Route path="players" component={PlayerChoice} onEnter={requireLogin} />
      <Route path="course/:id" component={Course} onEnter={requireLogin} />
      <Route path="add-course" component={CourseAdd} onEnter={requireLogin} />
      <Route path="edit-course/:id" component={CourseEdit} onEnter={requireLogin} />
      <Route path="courses" component={CourseChoice} onEnter={requireLogin} />
      <Route path="round" component={Round} onEnter={requireLogin} />
      <Route path="round/:hole" component={RoundHole} onEnter={requireLogin} />
      <Route path="round-edit/:hole" component={RoundHoleEdit} onEnter={requireLogin} />
      <Route path="round-summary" component={RoundSummary} onEnter={requireLogin} />
      <Route path="/scorecard" component={Scorecard} onEnter={requireLogin} />
      <Route path="settings" component={Settings} onEnter={requireLogin} />
      <IndexRoute component={Login} onEnter={redirectIfLoggedIn} />
    </Route>
  </Router>
);
