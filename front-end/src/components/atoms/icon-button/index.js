import React from 'react';
import { IconButton as IB } from '@material-ui/core';

const IconButton = (props) => {
  return <IB {...props}>{props.children}</IB>;
};

export default IconButton;
