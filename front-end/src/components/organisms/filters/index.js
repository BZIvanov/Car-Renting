import React from 'react';
import { Search } from '../../molecules';
import { Typography } from '../../atoms';

const Filters = () => {
  return (
    <div>
      <Typography variant="h2">Filters</Typography>
      <Search />
    </div>
  );
};

export default Filters;
