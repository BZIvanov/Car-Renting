import React from 'react';
import { Search } from '../../molecules';
import { Typography } from '../../atoms';
import { useStyles } from './styles';

const Filters = () => {
  const classes = useStyles();

  return (
    <aside className={classes.filters}>
      <Typography variant="h2" color="primary">
        Filters
      </Typography>
      <Search />
    </aside>
  );
};

export default Filters;
