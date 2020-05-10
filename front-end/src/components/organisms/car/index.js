import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Loading } from '../../atoms';
import { useStyles } from './styles';
import * as actions from '../../../store/actions/cars';

const Car = (props) => {
  const { isLoading, car, onFetchCar, match } = props;
  const classes = useStyles();

  useEffect(() => {
    onFetchCar(match.params.id);
  }, [onFetchCar, match.params.id]);

  return (
    <section className={classes.section}>
      {isLoading && <Loading />}
      <img src={car.image} alt="Rent a car" />
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.cars.loading,
    car: state.cars.car,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCar: (id) => dispatch(actions.fetchCar(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Car));
