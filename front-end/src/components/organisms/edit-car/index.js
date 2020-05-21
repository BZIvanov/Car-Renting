import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import { EditCarForm } from '../../molecules';
import { Typography, Loading } from '../../atoms';
import { useStyles } from './styles';
import * as actions from '../../../store/actions/cars';
import * as constants from '../../../constants';

const EditCar = (props) => {
  const { isLoading, isSuccess, onEditCar, car } = props;
  const classes = useStyles();

  if (isSuccess) {
    return <Redirect to={constants.ALL_AVAILABLE_CARS_PATH} />;
  }

  return (
    <section className={classes.section}>
      {isLoading && <Loading />}
      <div className={classes.content}>
        <Typography variant="h3" color="primary">
          Edit car form
        </Typography>
        <EditCarForm car={car} addCar={onEditCar} />
      </div>
    </section>
  );
};

const mapStateToProps = (state, props) => ({
  car: state.cars.cars.filter((car) => car._id === props.match.params.id)[0],
  isSuccess: state.cars.success,
  isLoading: state.cars.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onEditCar: (id, data) => dispatch(actions.editCar(id, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(EditCar));
