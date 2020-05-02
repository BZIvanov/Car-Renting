import React from 'react';
import { useStyles } from './styles';

const ShadowCover = (props) => {
  const classes = useStyles();

  return <div className={classes.shadow}>{props.children}</div>;
};

export default ShadowCover;
