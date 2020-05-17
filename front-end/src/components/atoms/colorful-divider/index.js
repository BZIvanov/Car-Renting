import React from 'react';
import { useStyles } from './styles';

const ColorfulDivider = () => {
  const classes = useStyles();

  return <div className={classes.divider}></div>;
};

export default ColorfulDivider;
