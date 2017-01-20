import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

/* eslint-disable */
import Main from 'Main';
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

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="players" component={PlayerChoice} />
      <Route path="course/:id" component={Course} />
      <Route path="add-course" component={CourseAdd} />
      <Route path="edit-course/:id" component={CourseEdit} />
      <Route path="courses" component={CourseChoice} />
      <Route path="round" component={Round} />
      <Route path="round/:hole" component={RoundHole} />
      <Route path="round-edit/:hole" component={RoundHoleEdit} />
      <Route path="round-summary" component={RoundSummary} />
      <Route path="/scorecard" component={Scorecard} />
      <Route path="settings" component={Settings} />
      <IndexRoute component={Start} />
    </Route>
  </Router>
);
