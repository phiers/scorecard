import React from 'react';

import CourseAddHole from 'CourseAddHole'; // eslint-disable-line

const CourseAddHoleList = () => {
  const renderList = () => {
    const holeArr = [];
    for (let i = 0; i < 18; i += 1) {
      holeArr.push(i + 1);
    }
    return holeArr.map(hole => <CourseAddHole key={hole} holeNo={hole} />);
  };
  return (
    <div className="add-hole-list">
      {renderList()}
    </div>
  );
};

export default CourseAddHoleList;
