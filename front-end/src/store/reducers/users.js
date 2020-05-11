import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: null,
        loading: false,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        error: null,
        loading: false,
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        user: null,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
