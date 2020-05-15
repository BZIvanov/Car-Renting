import React from 'react';
import { InputAdornment as IA } from '@material-ui/core';

const InputAdornment = ({ children, ...rest }) => <IA {...rest}>{children}</IA>;

export default InputAdornment;
