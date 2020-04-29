import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  userId: null,
  username: null,
  error: null,
  loading: null,
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
      };
    default:
      return state;
  }
};

export default reducer;
