import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { ROOT_PATH } from '../../../constants';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.token !== null && !auth.loading ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROOT_PATH} />
        )
      }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.users,
  };
};

export default connect(mapStateToProps)(PrivateRoute);
