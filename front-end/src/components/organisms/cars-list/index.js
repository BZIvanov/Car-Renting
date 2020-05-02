import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CarCard } from '../../molecules';
import { Loading } from '../../atoms';
import { useStyles } from './styles';
import * as actions from '../../../store/actions/cars';

const CarsList = (props) => {
  const { isLoading, cars, onFetchCars } = props;
  const classes = useStyles();

  useEffect(() => {
    onFetchCars();
  }, [onFetchCars]);

  let renderData = null;
  if (isLoading) {
    renderData = (
      <div className={classes.loading}>
        <Loading />
      </div>
    );
  } else {
    renderData = cars.map((car) => <CarCard key={car._id} car={car} />);
  }

  return (
    <section className={classes.cars}>
      <div className={classes.content}>{renderData}</div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.cars.loading,
    cars: state.cars.cars,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCars: () => dispatch(actions.fetchCars()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
