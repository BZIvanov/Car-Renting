import React from 'react';
import { Typography as TP } from '@material-ui/core';

const Typography = ({ children, ...rest }) => <TP {...rest}>{children}</TP>;

export default Typography;
