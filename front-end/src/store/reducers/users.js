import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  userId: null,
  username: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        userId: action.userId,
        username: action.username,
        error: null,
        loading: false,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        error: null,
        loading: false,
        userId: null,
        username: null,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        userId: null,
        username: null,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
