import React from 'react';
import { Typography } from '../../atoms';
import { useStyles } from './styles';

const InfoCard = ({ title, description }) => {
  const classes = useStyles();

  return (
    <article className={classes.card}>
      <Typography variant="h5" color="primary">
        {title}
      </Typography>
      <Typography variant="subtitle1" color="secondary">
        {description}
      </Typography>
    </article>
  );
};

export default InfoCard;
