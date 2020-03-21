import React from "react";

import "./formInput.styles.scss";

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label && <label className={`${otherProps.value ? "shrink" : ""} form-input-label`}>{label}</label>}
    </div>
  );
};

export default FormInput;
