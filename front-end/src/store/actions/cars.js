import axios from 'axios';
import * as actionTypes from './actionsTypes';

export const getCarsStart = () => {
  return {
    type: actionTypes.GET_CARS_START,
  };
};

export const getCarsSuccess = (cars) => {
  return {
    type: actionTypes.GET_CARS_SUCCESS,
    cars,
  };
};

export const getCarsFail = (error) => {
  return {
    type: actionTypes.GET_CARS_FAIL,
    error,
  };
};

export const fetchCars = () => {
  return (dispatch) => {
    dispatch(getCarsStart());
    axios
      .get('http://localhost:3100/api/cars')
      .then((response) => {
        dispatch(getCarsSuccess(response.data.data.cars));
      })
      .catch((err) => {
        dispatch(getCarsFail(err.message));
      });
  };
};
