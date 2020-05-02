import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  loading: null,
  cars: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CARS_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.GET_CARS_SUCCESS:
      return {
        ...state,
        cars: action.cars,
        loading: false,
        error: null,
      };
    case actionTypes.GET_CARS_FAIL:
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
