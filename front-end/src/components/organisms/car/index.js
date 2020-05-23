import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Loading, ImageCover } from '../../atoms';
import { CarDetails, RentForm } from '../../molecules';
import { useStyles } from './styles';
import { rentCar } from '../../../store/actions/rent';
import { fetchCar } from '../../../store/actions/cars';

const Car = (props) => {
  const {
    isLoading,
    car,
    isOwner,
    onFetchCar,
    onRentCar,
    history,
    match,
  } = props;
  const [showForm, setShowForm] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    onFetchCar(match.params.id);
  }, [onFetchCar, match.params.id]);

  return (
    <section className={classes.section}>
      {showForm && (
        <RentForm
          car={car}
          onRentCar={(id, days) => onRentCar(id, days, history)}
          onRentToggle={() => setShowForm(!showForm)}
        />
      )}
      {isLoading && <Loading />}
      {car && (
        <div className={classes.content}>
          <ImageCover image={car.image} />
          <CarDetails
            car={car}
            isOwner={isOwner}
            onRentToggle={() => setShowForm(!showForm)}
          />
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.cars.loading,
  car: state.cars.car,
  isOwner: state.cars.car && state.cars.car.creator === state.users.user._id,
  isSuccess: state.rents.success,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCar: (id) => dispatch(fetchCar(id)),
  onRentCar: (carId, days, history) => dispatch(rentCar(carId, days, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Car));
