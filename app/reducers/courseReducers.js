import defaultCourses from 'defaultCourses'; // eslint-disable-line

const courseReducers = (state = defaultCourses, action) => {
  switch (action.type) {
    case 'EDIT_COURSE': {
      const newArray = state.filter((course) => {
        if (course.id === action.id) {
          return false;
        }
        return true;
      });
      return [...newArray, action.course];
    }
    case 'REMOVE_COURSE':
      return state.filter((course) => {
        if (course.id === action.id) {
          return false;
        }
        return true;
      });
    case 'SAVE_COURSE':
      return [...state, action.course];
    default:
      return state;
  }
};

export default courseReducers;
