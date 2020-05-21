import React from 'react';
import { connect } from 'react-redux';
import { Search } from '../../molecules';
import { Typography } from '../../atoms';
import { useStyles } from './styles';
import * as actions from '../../../store/actions/cars';

const Filters = ({ onFetchCars }) => {
  const classes = useStyles();

  return (
    <aside className={classes.filters}>
      <Typography variant="h2" color="primary">
        Filters
      </Typography>
      <Search onFetchCars={onFetchCars} />
    </aside>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onFetchCars: (page, query) => dispatch(actions.fetchCars(page, query)),
});

export default connect(null, mapDispatchToProps)(Filters);
