import React from 'react';
import { useStyles } from './styles';

const CarCard = (props) => {
  const { car } = props;
  const classes = useStyles();

  return (
    <article className={classes.car}>
      <h1>{car.model}</h1>
      <img src={car.image} />
      <p>{car.pricePerDay}</p>
    </article>
  );
};

export default CarCard;
