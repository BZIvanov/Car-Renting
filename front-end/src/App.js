import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Home,
  AvailableCars,
  AddNewCar,
  Register,
  Login,
  NotFound,
} from './components/pages';
import { Layout, Logout } from './components/organisms';
import * as constants from './constants';

function App({ isAuthenticated }) {
  let authRoutes = (
    <Switch>
      <Route path={constants.ROOT_PATH} exact component={Home} />
      <Route
        path={constants.ALL_AVAILABLE_CARS_PATH}
        component={AvailableCars}
      />
      <Route path={constants.SIGNUP_PATH} component={Register} />
      <Route path={constants.LOGIN_PATH} component={Login} />
      <Route component={NotFound} />
    </Switch>
  );

  if (isAuthenticated) {
    authRoutes = (
      <Switch>
        <Route path={constants.ROOT_PATH} exact component={Home} />
        <Route
          path={constants.ALL_AVAILABLE_CARS_PATH}
          component={AvailableCars}
        />
        <Route path={constants.ADD_NEW_CAR_PATH} component={AddNewCar} />
        <Route path={constants.LOGOUT_PATH} component={Logout} />
        <Route component={NotFound} />
      </Switch>
    );
  }
  return (
    <BrowserRouter>
      <CssBaseline />
      <Layout>{authRoutes}</Layout>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.users.userId !== null,
  };
};

export default connect(mapStateToProps)(App);
