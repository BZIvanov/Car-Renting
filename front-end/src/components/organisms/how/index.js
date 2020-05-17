import React from 'react';
import { InfoCard } from '../../molecules';
import { infoCards } from './data';
import { useStyles } from './styles';

const How = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        {infoCards.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

export default How;
