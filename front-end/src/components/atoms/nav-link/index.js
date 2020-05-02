import React from 'react';
import { NavLink as NL } from 'react-router-dom';
import { useStyles } from './styles';

const Typography = (props) => {
  const classes = useStyles();

  return (
    <NL {...props} className={classes.navItem}>
      {props.children}
    </NL>
  );
};

export default Typography;
