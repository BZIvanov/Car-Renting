import React from 'react';
import { useStyles } from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        &copy; {new Date().getFullYear()} Rent A Car Service Ltd. All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
