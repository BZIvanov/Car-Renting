import React from 'react';
import { Header, Footer } from '../';
import { useStyles } from './styles';

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
