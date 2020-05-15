import React from 'react';
import { NavLink as NL } from 'react-router-dom';
import { useStyles } from './styles';

const NavLink = ({ children, ...rest }) => {
  const classes = useStyles();

  return (
    <NL {...rest} className={classes.navItem}>
      {children}
    </NL>
  );
};

export default NavLink;
