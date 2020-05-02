import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { Typography, Loading, TextField } from '../../atoms';
import { useStyles } from './styles';
import * as actions from '../../../store/actions/auth';
import * as constants from '../../../constants';

const Register = (props) => {
  const { isLoading, isAuthenticated } = props;
  const classes = useStyles();
  const { register, handleSubmit, errors, getValues } = useForm();
  const onSubmit = (data) => {
    props.onAuth(data.username, data.email, data.password);
  };

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
    <section className={classes.register}>
      {authRedirect}
      {loading}
      <div className={classes.content}>
        <Typography variant="h3" color="primary">
          Register form
        </Typography>
        <form
          className={classes.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <TextField
            name="username"
            inputRef={register({
              required: constants.FIELD_REQUIRED,
              minLength: {
                value: constants.FIELD_MINLENGTH,
                message: constants.FIELD_MINLENGTH_TEXT,
              },
              maxLength: {
                value: constants.FIELD_MAXLENGTH,
                message: constants.FIELD_MAXLENGTH_TEXT,
              },
            })}
            error={errors.username && errors.username.message.length > 0}
            helperText={errors.username && errors.username.message}
            label="Username"
            fullWidth
          />
          <TextField
            name="email"
            inputRef={register({
              required: constants.FIELD_REQUIRED,
              maxLength: {
                value: constants.FIELD_MAXLENGTH,
                message: constants.FIELD_MAXLENGTH_TEXT,
              },
              pattern: {
                value: /^[\w.]+@[a-z]+\.[a-z]{2,3}$/,
                message: constants.INVALID_EMAIL,
              },
            })}
            error={errors.email && errors.email.message.length > 0}
            helperText={errors.email && errors.email.message}
            label="E-mail"
            fullWidth
          />
          <TextField
            name="password"
            inputRef={register({
              required: constants.FIELD_REQUIRED,
              minLength: {
                value: constants.FIELD_MIDLENGTH,
                message: constants.FIELD_MIDLENGTH_TEXT,
              },
              maxLength: {
                value: constants.FIELD_MAXLENGTH,
                message: constants.FIELD_MAXLENGTH_TEXT,
              },
            })}
            error={errors.password && errors.password.message.length > 0}
            helperText={errors.password && errors.password.message}
            label="Password"
            fullWidth
          />
          <TextField
            name="confirmPassword"
            inputRef={register({
              required: constants.FIELD_REQUIRED,
              minLength: {
                value: constants.FIELD_MIDLENGTH,
                message: constants.FIELD_MIDLENGTH_TEXT,
              },
              maxLength: {
                value: constants.FIELD_MAXLENGTH,
                message: constants.FIELD_MAXLENGTH_TEXT,
              },
              validate: {
                matched: (value) =>
                  value === getValues('password') || 'Passwords should match',
              },
            })}
            error={
              errors.confirmPassword &&
              errors.confirmPassword.message.length > 0
            }
            helperText={
              errors.confirmPassword && errors.confirmPassword.message
            }
            label="Confirm password"
            fullWidth
          />
          <Button variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
