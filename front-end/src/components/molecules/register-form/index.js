import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { TextField } from '../../atoms';
import { useStyles } from './styles';
import * as constants from '../../../constants';

const RegisterForm = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, getValues } = useForm();

  const onSubmit = (data) => {
    props.auth(data.username, data.email, data.password);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
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
          errors.confirmPassword && errors.confirmPassword.message.length > 0
        }
        helperText={errors.confirmPassword && errors.confirmPassword.message}
        label="Confirm password"
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;
