import React from 'react';
import { connect } from 'react-redux';
import { NavItems } from '../../molecules';
import { useStyles } from './styles';
import {
  commonLinks,
  authenticatedLinks,
  nonAuthenticatedLinks,
} from './linksData';

const Header = ({ isAuthenticated }) => {
  const classes = useStyles();

  let links = commonLinks;
  if (isAuthenticated) {
    links = links.concat(authenticatedLinks);
  } else {
    links = links.concat(nonAuthenticatedLinks);
  }

  return (
    <header className={classes.header}>
      <nav className={classes.navigation}>
        <NavItems links={links} />
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.user !== null,
});

export default connect(mapStateToProps)(Header);
