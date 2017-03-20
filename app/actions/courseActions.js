import { firebaseRef } from 'firebaseConfig'; // eslint-disable-line
import defaultCourses from 'defaultCourses'; // eslint-disable-line

function addCourse(course) {
  return {
    type: 'ADD_COURSE',
    course,
  };
}

export function startAddCourse(course) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const coursesRef = firebaseRef.child(`users/${uid}/courses`);
    const key = coursesRef.push().key;
    const newCourse = {
      ...course,
      id: key,
    };
    return coursesRef.push(newCourse).then(() => {
      dispatch(addCourse(newCourse));
    });
  };
}

function removeCourse(id) {
  return {
    type: 'REMOVE_COURSE',
    id,
  };
}

export function startRemoveCourse(id) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const coursesRef = firebaseRef.child(`users/${uid}/courses`);
    coursesRef.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        // find the node selected for deletion
        if (child.val().id === id) {
          // the child.key appended to coursesRef is the path to remove
          return coursesRef.child(child.key).remove()
            .then(() => dispatch(removeCourse(id)));
        }
        return false;
      });
    });
  };
}

export function editCourse(id, course) {
  return {
    type: 'EDIT_COURSE',
    id,
    course,
  };
}

export function startEditCourse(id, course) {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const coursesRef = firebaseRef.child(`users/${uid}/courses`);
    coursesRef.once('value').then((snapshot) => {
      snapshot.forEach((child) => {
        // find the node selected for update
        if (child.val().id === id) {
          // the child.key appended to coursesRef is the path to update
          return coursesRef.child(child.key).update(course)
            .then(() => dispatch(editCourse(id, course)));
        }
        return false;
      });
    });
  };
}

function fetchCourses(courses) {
  return {
    type: 'FETCH_COURSES',
    courses,
  };
}

export function startFetchCourses() {
  return (dispatch, getState) => {
    const uid = getState().settings.user.id;
    const coursesRef = firebaseRef.child(`users/${uid}/courses`);
    return coursesRef.once('value').then((snapshot) => {
      if (snapshot.val() !== null) {
        const courses = snapshot.val();
        // App expects an array, so need to convert
        const coursesArray = [];
        Object.keys(courses).forEach((courseId) => {
          coursesArray.push({
            id: courseId,
            ...courses[courseId], //grab the course object with this id
          });
        });
        dispatch(fetchCourses(coursesArray));
      } else {
        defaultCourses.forEach(course => dispatch(startAddCourse(course)));
      }
    });
  };
}
