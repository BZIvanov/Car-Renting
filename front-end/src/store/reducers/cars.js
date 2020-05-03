import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  loading: null,
  cars: [],
  success: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CARS_START:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case actionTypes.GET_CARS_SUCCESS:
      return {
        ...state,
        cars: action.cars,
        loading: false,
        error: null,
      };
    case actionTypes.CREATE_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
      };
    case actionTypes.CARS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
