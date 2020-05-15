import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {
  Home,
  AvailableCars,
  AddNewCar,
  EditYouCar,
  Register,
  Login,
  CarDetails,
  NotFound,
} from '../../pages';
import { Logout } from '../';
import { PrivateRoute } from '../../atoms';
import * as constants from '../../../constants';

const AppRoutes = () => (
  <Switch>
    <Route path={constants.ROOT_PATH} exact component={Home} />
    <Route path={constants.ALL_AVAILABLE_CARS_PATH} component={AvailableCars} />
    <Route path={constants.SIGNUP_PATH} component={Register} />
    <Route path={constants.LOGIN_PATH} component={Login} />
    <PrivateRoute path={constants.ADD_NEW_CAR_PATH} component={AddNewCar} />
    <PrivateRoute path={constants.CAR_DETAILS_PATH} component={CarDetails} />
    <PrivateRoute path={constants.EDIT_CAR_PATH} component={EditYouCar} />
    <PrivateRoute path={constants.LOGOUT_PATH} component={Logout} />
    <Route component={NotFound} />
  </Switch>
);

export default AppRoutes;
