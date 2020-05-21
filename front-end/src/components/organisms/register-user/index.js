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

  if (isAuthenticated) {
    return <Redirect to={constants.ROOT_PATH} />;
  }

  return (
    <section className={classes.section}>
      {isLoading && <Loading />}
      <div className={classes.content}>
        <Typography variant="h3" color="primary">
          Register form
        </Typography>
        <RegisterForm auth={onAuth} />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.users.user !== null,
  isLoading: state.users.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onAuth: (username, email, password) =>
    dispatch(actions.auth(username, email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);
