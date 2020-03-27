import React from "react";

import { Group, FormInputStyle, FormInputLabel } from "./formInput.styles";

const FormInput = ({ label, handleChange, ...otherProps }) => {
  const shrink = otherProps.value ? true : false;
  return (
    <Group>
      <FormInputStyle onChange={handleChange} {...otherProps} />
      {label && (
        <FormInputLabel shrink={shrink} className='form-input-label'>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
