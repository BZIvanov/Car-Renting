import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  HomePage,
  AvailableCarsPage,
  RegisterPage,
  NotFoundPage,
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
            <Route path={constants.ROOT_PATH} exact component={HomePage} />
            <Route
              path={constants.ALL_AVAILABLE_CARS_PATH}
              component={AvailableCarsPage}
            />
            <Route path={constants.SIGNUP_PATH} component={RegisterPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
