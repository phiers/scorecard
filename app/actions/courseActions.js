const courseActions = {
  saveCourse(course) {
    return {
      type: 'SAVE_COURSE',
      course,
    };
  },
};

export default courseActions;
