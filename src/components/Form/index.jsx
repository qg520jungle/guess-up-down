/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function Form(props) {
  return (
    <div className="page">
      <form {...props} />
    </div>
  );
}

export default Form;
