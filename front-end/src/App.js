import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Home,
  AvailableCars,
  AddNewCar,
  Register,
  Login,
  CarDetails,
  NotFound,
} from './components/pages';
import { Layout, Logout } from './components/organisms';
import { PrivateRoute } from './components/atoms';
import { autoSignup } from './store/actions/auth';
import * as constants from './constants';

const App = (props) => {
  const { onTryAutoSignup } = props;

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  return (
    <BrowserRouter>
      <CssBaseline />
      <Layout>
        <Switch>
          <Route path={constants.ROOT_PATH} exact component={Home} />
          <Route
            path={constants.ALL_AVAILABLE_CARS_PATH}
            component={AvailableCars}
          />
          <Route path={constants.SIGNUP_PATH} component={Register} />
          <Route path={constants.LOGIN_PATH} component={Login} />
          <PrivateRoute
            path={constants.ADD_NEW_CAR_PATH}
            component={AddNewCar}
          />
          <PrivateRoute
            path={constants.CAR_DETAILS_PATH}
            component={CarDetails}
          />
          <PrivateRoute path={constants.LOGOUT_PATH} component={Logout} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(autoSignup()),
  };
};

export default connect(null, mapDispatchToProps)(App);
