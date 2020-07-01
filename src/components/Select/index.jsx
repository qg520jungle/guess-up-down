/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function Select(props) {
  return (
    <div className="page">
      <select {...props} />
    </div>
  );
}

export default Select;
