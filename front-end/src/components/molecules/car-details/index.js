import React from 'react';
import { Typography, PrimaryButton, Link } from '../../atoms';
import { useStyles } from './styles';

const CarDetails = (props) => {
  const { car, onRentToggle, isOwner } = props;
  const classes = useStyles();

  const renderAction = isOwner ? (
    <Link to={`/edit-car/${car._id}`}>
      <PrimaryButton variant="contained" color="primary">
        Edit car
      </PrimaryButton>
    </Link>
  ) : (
    <PrimaryButton variant="contained" color="primary" onClick={onRentToggle}>
      RENT IT
    </PrimaryButton>
  );

  return (
    <div className={classes.info}>
      <Typography variant="h3">
        <span className={classes.text}>Car model:</span>
        {car.model}
      </Typography>
      <Typography variant="h4">
        <span className={classes.text}>Year:</span>
        {car.year}
      </Typography>
      <Typography variant="h4">
        <span className={classes.text}>City:</span>
        {car.city}
      </Typography>
      <Typography variant="h3">
        <span className={classes.text}>Price per day:</span>
        {car.pricePerDay.toFixed(2)}
      </Typography>
      <div>{renderAction}</div>
    </div>
  );
};

export default CarDetails;
