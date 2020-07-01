/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function Checkbox(props) {
  return (
    <div className="page">
      <checkbox {...props} />
    </div>
  );
}

export default Checkbox;
