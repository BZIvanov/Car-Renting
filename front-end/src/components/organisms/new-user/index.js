import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { RegisterForm } from '../../molecules';
import { Typography, Loading } from '../../atoms';
import { useStyles } from './styles';
import * as actions from '../../../store/actions/auth';
import * as constants from '../../../constants';

const NewUser = (props) => {
  const { isLoading, isAuthenticated, onAuth } = props;
  const classes = useStyles();

  let loading = null;
  if (isLoading) {
    loading = (
      <div className={classes.loading}>
        <Loading />
      </div>
    );
  }

  let authRedirect = null;
  if (isAuthenticated) {
    authRedirect = <Redirect to={constants.ROOT_PATH} />;
  }

  return (
    <section className={classes.section}>
      {authRedirect}
      {loading}
      <div className={classes.content}>
        <Typography variant="h3" color="primary">
          Register form
        </Typography>
        <RegisterForm auth={onAuth} />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.users.userId !== null,
    isLoading: state.users.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, email, password) =>
      dispatch(actions.auth(username, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
