import axios from 'axios';
import * as actionTypes from './actionsTypes';

export const carsStart = () => {
  return {
    type: actionTypes.CARS_START,
  };
};

export const getCarsSuccess = (cars, allCarsCount, page) => {
  return {
    type: actionTypes.GET_CARS_SUCCESS,
    cars,
    allCarsCount,
    page,
  };
};

export const createCarSuccess = () => {
  return {
    type: actionTypes.CREATE_CAR_SUCCESS,
  };
};

export const getCarSuccess = (car) => {
  return {
    type: actionTypes.GET_CAR_SUCCESS,
    car,
  };
};

export const carsFail = (error) => {
  return {
    type: actionTypes.CARS_FAIL,
    error,
  };
};

export const fetchCars = (page = 1) => {
  return (dispatch) => {
    dispatch(carsStart());
    axios
      .get(`http://localhost:3100/api/cars?page=${page}`, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(
          getCarsSuccess(response.data.data.cars, response.data.results, page)
        );
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
      .post('http://localhost:3100/api/cars', data, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(createCarSuccess());
      })
      .catch((err) => {
        dispatch(carsFail(err.message));
        console.dir(err);
      });
  };
};

export const editCar = (id, data) => {
  return (dispatch) => {
    dispatch(carsStart());
    axios
      .patch(`http://localhost:3100/api/cars/${id}`, data, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(createCarSuccess());
      })
      .catch((err) => {
        dispatch(carsFail(err.message));
        console.dir(err);
      });
  };
};

export const fetchCar = (id) => {
  return (dispatch) => {
    dispatch(carsStart());
    axios
      .get(`http://localhost:3100/api/cars/${id}`, {
        withCredentials: true,
      })
      .then((response) => {
        dispatch(getCarSuccess(response.data.data.car));
      })
      .catch((err) => {
        dispatch(carsFail(err.message));
      });
  };
};
