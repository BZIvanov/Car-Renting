import React from 'react';
import { Typography, PrimaryButton } from '../../atoms';
import { useStyles } from './styles';

const CarDetails = (props) => {
  const { car, onRentClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.info}>
      <Typography variant="h2">
        <span>Car model:</span>
        {car.model}
      </Typography>
      <Typography variant="h4">
        <span>Year:</span>
        {car.year}
      </Typography>
      <Typography variant="h4">
        <span>City:</span>
        {car.city}
      </Typography>
      <Typography variant="h3">
        <span>Price per day:</span>
        {car.pricePerDay.toFixed(2)}
      </Typography>
      <PrimaryButton onClick={onRentClick}>RENT IT</PrimaryButton>
    </div>
  );
};

export default CarDetails;
