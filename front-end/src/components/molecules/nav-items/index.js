import React from 'react';
import { NavLink } from '../../atoms';
import { useStyles } from './styles';

const NavItems = ({ links }) => {
  const classes = useStyles();

  return (
    <ul className={classes.listItems}>
      {links.map((link) => (
        <li key={link.value}>
          <NavLink to={link.path} exact activeClassName={classes.activeLink}>
            {link.icon && <link.icon fontSize="small" />}
            {link.value}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
