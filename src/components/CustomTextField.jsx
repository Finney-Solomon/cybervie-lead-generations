import React from 'react';
import TextField from '@mui/material/TextField';
import FormError from './FormError';

const CustomTextField = ({ id, label, variant, register, registerOptions, errors }) => {
  const hasError = !!errors[id];

  return (
    <div>
      <TextField
        id={id}
        label={label}
        variant={variant}
        error={hasError}
        {...register(id, registerOptions)}
      />
      <FormError message={errors[id]?.message} />
    </div>
  );
};

export default CustomTextField;
