import axios from 'axios';
import * as actionTypes from './actionsTypes';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (username, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    username,
    userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (username, email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post('http://localhost:3100/api/user/signup', {
        username,
        email,
        password,
      })
      .then((response) => {
        dispatch(
          authSuccess(response.data.data.username, response.data.data._id)
        );
      })
      .catch((err) => {
        dispatch(authFail(err.message));
      });
  };
};
