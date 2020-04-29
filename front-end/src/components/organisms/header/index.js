import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <ul className={classes.listItems}>
          <li>
            <NavLink className={classes.navItem} to="/">
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.navItem} to="/all-cars">
              VIEW AVAILABLE CARS
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.navItem} to="/signup">
              SIGN UP
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.navItem} to="/signin">
              SIGN IN
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
