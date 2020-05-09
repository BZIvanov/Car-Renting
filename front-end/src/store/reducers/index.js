import { combineReducers } from 'redux';
import usersReducer from './users';
import carsReducer from './cars';
import alertsReducer from './alerts';

const rootReducer = combineReducers({
  users: usersReducer,
  cars: carsReducer,
  alerts: alertsReducer,
});

export default rootReducer;
