import React from 'react';

import CourseAddHole from 'CourseAddHole'; // eslint-disable-line

const CourseAddHoleList = (props) => {
  // render list of holes
  const renderList = () => {
    const holeArr = [];
    for (let i = 1; i < 19; i += 1) {
      holeArr.push(i);
    }
    return holeArr.map(hole => <CourseAddHole key={hole} holeNo={hole} data={props.data} />);
  };
  return (
    <div className="add-hole-list">
      {renderList()}
    </div>
  );
};

export default CourseAddHoleList;
