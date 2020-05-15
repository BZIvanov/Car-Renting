import React from 'react';
import { TextField as TF } from '@material-ui/core';

const TextField = ({ children, ...rest }) => {
  return <TF {...rest}>{children}</TF>;
};

export default TextField;
