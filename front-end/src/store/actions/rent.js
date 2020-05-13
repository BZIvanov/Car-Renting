import axios from 'axios';
import * as actionTypes from './actionsTypes';
import { ALL_AVAILABLE_CARS_PATH } from '../../constants';
import { setAlert } from './alert';

export const rentStart = () => {
  return {
    type: actionTypes.RENT_START,
  };
};

export const rentCarSuccess = () => {
  return {
    type: actionTypes.RENT_CAR_SUCCESS,
  };
};

export const rentFail = (error) => {
  return {
    type: actionTypes.RENT_FAIL,
    error,
  };
};

export const rentCar = (carId, days, history) => {
  const data = {
    id: carId,
    days,
  };
  return (dispatch) => {
    dispatch(rentStart());
    axios
      .post('http://localhost:3100/api/cars/rent', data, {
        withCredentials: true,
      })
      .then(() => {
        dispatch(setAlert(`Car rented succesfuly!`, 'success'));
        dispatch(rentCarSuccess());
        history.push(ALL_AVAILABLE_CARS_PATH);
      })
      .catch((err) => {
        dispatch(rentFail(err.message));
      });
  };
};
