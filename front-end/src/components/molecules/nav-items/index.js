import React from 'react';
import { NavLink, Typography } from '../../atoms';
import { useStyles } from './styles';

const NavItems = ({ links }) => {
  const classes = useStyles();

  return (
    <ul className={classes.listItems}>
      {links.map((link) => (
        <li key={link.value}>
          <NavLink to={link.path} exact activeClassName={classes.activeLink}>
            <Typography variant="h6">
              {link.icon && <link.icon fontSize="small" />}
              <span className={classes.text}>{link.value}</span>
            </Typography>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
