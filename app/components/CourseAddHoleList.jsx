import React from 'react';

import CourseAddHole from 'CourseAddHole'; // eslint-disable-line

const CourseAddHoleList = (props) => {
  const renderList = () => {
    const holeArr = [];
    // let holeData = {};
    for (let i = 1; i < 19; i += 1) {
      holeArr.push(i);
      // holeData = props.data ? props.data[i - 1] : null;
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
