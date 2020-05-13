import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RENT_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actionTypes.RENT_CAR_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case actionTypes.RENT_FAIL:
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
