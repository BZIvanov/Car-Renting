import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Home,
  AvailableCars,
  AddNewCar,
  Register,
  NotFound,
} from './components/pages';
import { Layout } from './components/organisms';
import * as constants from './constants';

function App() {
  return (
    <>
      <BrowserRouter>
        <CssBaseline />
        <Layout>
          <Switch>
            <Route path={constants.ROOT_PATH} exact component={Home} />
            <Route
              path={constants.ALL_AVAILABLE_CARS_PATH}
              component={AvailableCars}
            />
            <Route path={constants.ADD_NEW_CAR_PATH} component={AddNewCar} />
            <Route path={constants.SIGNUP_PATH} component={Register} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
