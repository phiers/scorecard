// import defaultCourses from 'defaultCourses'; // eslint-disable-line

const courseReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return [...state, action.course];
    case 'EDIT_COURSE': {
      // delete the old course from state
      const newArray = state.filter((course) => {
        if (course.id === action.id) {
          return false;
        }
        return true;
      });
      return [...newArray, action.course];
    }
    case 'FETCH_COURSES':
      return [...action.courses];
    case 'REMOVE_COURSE':
      return state.filter((course) => {
        if (course.id === action.id) {
          return false;
        }
        return true;
      });
    default:
      return state;
  }
};

export default courseReducers;
