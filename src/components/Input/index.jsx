/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function Input(props) {
  return (
    <div className="page">
      <input {...props} />
    </div>
  );
}

export default Input;
