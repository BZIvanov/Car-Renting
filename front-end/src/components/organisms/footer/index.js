import React from 'react';
import { Typography } from '../../atoms';
import { useStyles } from './styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.content}>
        <Typography variant="subtitle1" color="primary">
          &copy; {new Date().getFullYear()} Rent A Car Service Ltd. All Rights
          Reserved
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
