import React from 'react';
import { connect } from 'react-redux';

const Course = (props) => {
  const { dispatch, name, state, settings } = props;
  const mode = settings.scoringMode;
  const renderAction = () => {
    if (mode) {
      return <input type="checkbox" />;
    }
    return (
      <div className="button-group tiny">
        <button className="button">Edit</button>
        <button className="button">Delete</button>
      </div>
    )
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{state}</td>
      <td>
        {renderAction()}
      </td>
    </tr>
  );
};

export default connect(state => state)(Course);
