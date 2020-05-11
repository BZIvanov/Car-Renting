import React from 'react';
import { Typography } from '../../atoms';
import { useStyles } from './styles';

const CarDetails = (props) => {
  const { car } = props;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.infoGroup}>
        <Typography variant="subtitle1">Car model:</Typography>
        <Typography variant="h2">{car.model}</Typography>
      </div>
    </div>
  );
};

export default CarDetails;
