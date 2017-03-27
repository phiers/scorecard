import React from 'react';
import TitleBar from 'TitleBar'; // eslint-disable-line

const Transition = () => (
  <div>
    <TitleBar title="Saving . . . ." />
    <div className="transition" />
  </div>
);

export default Transition;
