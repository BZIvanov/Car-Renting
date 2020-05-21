import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CreateCarForm } from '../../molecules';
import { Typography, Loading } from '../../atoms';
import { useStyles } from './styles';
import * as actions from '../../../store/actions/cars';
import * as constants from '../../../constants';

const NewCar = (props) => {
  const { isLoading, isSuccess, onAddCar } = props;
  const classes = useStyles();

  if (isSuccess) {
    return <Redirect to={constants.ALL_AVAILABLE_CARS_PATH} />;
  }

  return (
    <section className={classes.section}>
      {isLoading && <Loading />}
      <div className={classes.content}>
        <Typography variant="h3" color="primary">
          Add new car form
        </Typography>
        <CreateCarForm addCar={onAddCar} />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isSuccess: state.cars.success,
  isLoading: state.cars.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onAddCar: (data) => dispatch(actions.createCar(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCar);
