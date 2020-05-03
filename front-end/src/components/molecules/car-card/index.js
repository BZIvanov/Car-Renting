import React from 'react';
import { Typography } from '../../atoms';
import { useStyles } from './styles';

const CarCard = (props) => {
  const { car } = props;
  const classes = useStyles();

  return (
    <article className={classes.car}>
      <div className={classes.imgContainer}>
        <img src={car.image} alt="Car" />
      </div>
      <div className={classes.carInfo}>
        <Typography variant="h4">{car.model}</Typography>
        <Typography variant="subtitle1">
          Price per day: {car.pricePerDay.toFixed(2)} lv.
        </Typography>
        <div className={classes.generalInfo}>
          <Typography variant="subtitle2">
            Year: <span>{car.year}</span>
          </Typography>
          <Typography variant="subtitle2">
            City: <span>{car.city}</span>
          </Typography>
        </div>
      </div>
    </article>
  );
};

export default CarCard;
