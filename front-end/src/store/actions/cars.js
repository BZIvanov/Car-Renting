import axios from 'axios';
import * as actionTypes from './actionsTypes';

export const carsStart = () => {
  return {
    type: actionTypes.CARS_START,
  };
};

export const getCarsSuccess = (cars) => {
  return {
    type: actionTypes.GET_CARS_SUCCESS,
    cars,
  };
};

export const createCarSuccess = () => {
  return {
    type: actionTypes.CREATE_CAR_SUCCESS,
  };
};

export const carsFail = (error) => {
  return {
    type: actionTypes.CARS_FAIL,
    error,
  };
};

export const fetchCars = () => {
  return (dispatch) => {
    dispatch(carsStart());
    axios
      .get('http://localhost:3100/api/cars')
      .then((response) => {
        dispatch(getCarsSuccess(response.data.data.cars));
      })
      .catch((err) => {
        dispatch(carsFail(err.message));
      });
  };
};

export const createCar = (data) => {
  return (dispatch) => {
    dispatch(carsStart());
    axios
      .post('http://localhost:3100/api/cars', data)
      .then(() => {
        dispatch(createCarSuccess());
      })
      .catch((err) => {
        dispatch(carsFail(err.message));
      });
  };
};
