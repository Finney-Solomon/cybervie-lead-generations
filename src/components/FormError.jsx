import React from 'react';

const FormError = ({ message }) => {
  return message ? <p style={{ color: '#a81313F' }}>{message}</p> : null;
};

export default FormError;