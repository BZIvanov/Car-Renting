import { combineReducers } from 'redux';
import usersReducer from './users';
import carsReducer from './cars';
import rentsReducer from './rents';
import alertsReducer from './alerts';

const rootReducer = combineReducers({
  users: usersReducer,
  cars: carsReducer,
  rents: rentsReducer,
  alerts: alertsReducer,
});

export default rootReducer;
