import React from 'react';
import { Typography } from '../../atoms';
import { useStyles } from './styles';

const Landing = () => {
  const classes = useStyles();

  return (
    <section className={classes.content}>
      <div className={classes.overlay}>
        <Typography variant="h1" color="primary">
          Rent exclusive car
        </Typography>
        <Typography variant="h3" color="secondary">
          FOR YOUR SPECIAL OCCASION!
        </Typography>
      </div>
    </section>
  );
};

export default Landing;
