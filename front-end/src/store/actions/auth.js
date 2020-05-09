import axios from 'axios';
import * as actionTypes from './actionsTypes';
import { setAlert } from './alert';

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (username, token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    username,
    token,
  };
};

export const authLogout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error,
  };
};

export const auth = (username, email, password) => {
  return (dispatch) => {
    dispatch(authStart());

    const formType = username ? 'signup' : 'login';

    axios
      .post(
        `http://localhost:3100/api/user/${formType}`,
        {
          username,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        dispatch(
          authSuccess(response.data.data.user.username, response.data.token)
        );
        dispatch(
          setAlert(`Welcome ${response.data.data.user.username}`, 'success')
        );
      })
      .catch((err) => {
        dispatch(setAlert(err.response.data.message, 'danger'));
        dispatch(authFail(err.message));
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .get('http://localhost:3100/api/user/logout', {
        withCredentials: true,
      })
      .then(() => {
        dispatch(authLogout());
      })
      .catch((err) => {
        dispatch(authFail(err.message));
      });
  };
};
