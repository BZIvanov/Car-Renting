import React from 'react';
import { TextField as TF } from '@material-ui/core';

const TextField = (props) => {
  return <TF {...props}>{props.children}</TF>;
};

export default TextField;
