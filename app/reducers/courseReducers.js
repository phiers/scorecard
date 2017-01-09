import defaultCourses from 'defaultCourses'; // eslint-disable-line

const courseReducers = (state = defaultCourses, action) => {
  switch (action.type) {
    case 'SAVE_COURSE':
      return [
        ...state,
        action.course,
      ];
    default:
      return state;
  }
};

export default courseReducers;
