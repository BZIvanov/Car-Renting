import React from 'react';
import { NavLink } from '../../atoms';
import { useStyles } from './styles';

const NavItems = (props) => {
  const classes = useStyles();

  return (
    <ul className={classes.listItems}>
      {props.links.map((link) => (
        <li key={link.value}>
          <NavLink to={link.path}>
            {link.icon && <link.icon fontSize="small" />}
            {link.value}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
