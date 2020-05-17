import React from 'react';
import { Typography, PrimaryButton, Link } from '../../atoms';
import { useStyles } from './styles';

const CarDetails = (props) => {
  const { car, onRentToggle } = props;
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
      <PrimaryButton variant="contained" color="primary" onClick={onRentToggle}>
        RENT IT
      </PrimaryButton>
      <Link to={`/edit-car/${car._id}`}>Edit car</Link>
    </div>
  );
};

export default CarDetails;
