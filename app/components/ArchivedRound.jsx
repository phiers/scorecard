import React from 'react';

const ArchivedRound = (props) => {
  const { milliseconds, date, lastHole, course } = props;
  return (
    <tr>
      <td>{date}</td>
      <td>{course.name}</td>
      <td>{lastHole}</td>
      <td>
        <button className="button tiny">View</button>
        <button className="alert button tiny">Del</button>
      </td>
    </tr>
  );
};

export default ArchivedRound;
