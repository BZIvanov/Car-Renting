import React from 'react';
import { Filters, CarsList } from '../../organisms';
import { useStyles } from './styles';

const AvailableCars = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Filters />
      <CarsList />
    </div>
  );
};

export default AvailableCars;
