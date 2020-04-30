import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useStyles } from './styles';

const Header = ({ isAuthenticated }) => {
  const classes = useStyles();

  const navItems = isAuthenticated ? (
    <>
      <li>
        <NavLink className={classes.navItem} to="/add-new-car">
          ADD NEW CAR
        </NavLink>
      </li>
    </>
  ) : (
    <>
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
    </>
  );

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
          {navItems}
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.users.userId,
  };
};

export default connect(mapStateToProps)(Header);
