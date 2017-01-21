
export function saveCourse(course) {
  return {
    type: 'SAVE_COURSE',
    course,
  };
}

export function removeCourse(id) {
  return {
    type: 'REMOVE_COURSE',
    id,
  };
}

export function editCourse(id, course) {
  return {
    type: 'EDIT_COURSE',
    id,
    course,
  };
}
