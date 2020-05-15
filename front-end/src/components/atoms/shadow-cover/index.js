import React from 'react';
import { useStyles } from './styles';

const ShadowCover = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.shadow}>{children}</div>;
};

export default ShadowCover;
