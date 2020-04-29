import React from 'react';
import { Typography as TP } from '@material-ui/core';

const Typography = (props) => {
  return <TP {...props}>{props.children}</TP>;
};

export default Typography;
