import React from 'react';
import { Search } from '../../molecules';
import { Typography } from '../../atoms';

const Filters = () => {
  return (
    <aside>
      <Typography variant="h2">Filters</Typography>
      <Search />
    </aside>
  );
};

export default Filters;
