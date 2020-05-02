import React from 'react';
import { connect } from 'react-redux';
import { NavItems } from '../../molecules';
import { useStyles } from './styles';
import * as constants from '../../../constants';

const Header = ({ isAuthenticated }) => {
  const classes = useStyles();

  let linkItems = [
    { value: 'HOME', path: constants.ROOT_PATH },
    { value: 'VIEW AVAILABLE CARS', path: constants.ALL_AVAILABLE_CARS },
  ];

  if (isAuthenticated) {
    linkItems = linkItems.concat([
      { value: 'ADD NEW CAR', path: constants.ADD_NEW_CAR },
    ]);
  } else {
    linkItems = linkItems.concat([
      { value: 'SIGN UP', path: constants.SIGNUP_PATH },
      { value: 'LOG IN', path: constants.LOGIN_PATH },
    ]);
  }

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <NavItems links={linkItems} />
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.users.userId !== null,
  };
};

export default connect(mapStateToProps)(Header);
