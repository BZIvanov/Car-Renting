import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Loading, ImageCover } from '../../atoms';
import { CarDetails } from '../../molecules';
import { useStyles } from './styles';
import * as actions from '../../../store/actions/cars';

const Car = (props) => {
  const { isLoading, car, onFetchCar, match } = props;
  const [showForm, setShowForm] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    onFetchCar(match.params.id);
  }, [onFetchCar, match.params.id]);

  return (
    <section className={classes.section}>
      {isLoading && <Loading />}
      {car && (
        <div className={classes.content}>
          <ImageCover image={car.image} />
          <CarDetails car={car} onRentClick={() => setShowForm(!showForm)} />
        </div>
      )}
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
