const courseActions = {
  saveCourse(course) {
    return {
      type: 'SAVE_COURSE',
      course,
    };
  },
  removeCourse(id) {
    return {
      type: 'REMOVE_COURSE',
      id,
    };
  },
  editCourse(id, course) {
    return {
      type: 'EDIT_COURSE',
      id,
      course,
    };
  },
};

export default courseActions;
