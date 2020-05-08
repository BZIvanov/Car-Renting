import { combineReducers } from 'redux';
import usersReducer from './users';
import carsReducer from './cars';

const rootReducer = combineReducers({
  users: usersReducer,
  cars: carsReducer,
});

export default rootReducer;
