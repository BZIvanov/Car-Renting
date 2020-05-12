import React from 'react';
import { useForm } from 'react-hook-form';
import { SignupSchema } from './schema';
import { TextField, PrimaryButton } from '../../atoms';
import { useStyles } from './styles';

const RegisterForm = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema,
  });

  const onSubmit = (data) => {
    props.auth(data.username, data.email, data.password);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        name="username"
        inputRef={register}
        error={errors.username && errors.username.message.length > 0}
        helperText={errors.username && errors.username.message}
        label="Username"
        fullWidth
      />
      <TextField
        name="email"
        inputRef={register}
        error={errors.email && errors.email.message.length > 0}
        helperText={errors.email && errors.email.message}
        label="E-mail"
        fullWidth
      />
      <TextField
        name="password"
        inputRef={register}
        error={errors.password && errors.password.message.length > 0}
        helperText={errors.password && errors.password.message}
        label="Password"
        fullWidth
      />
      <TextField
        name="confirmPassword"
        inputRef={register}
        error={
          errors.confirmPassword && errors.confirmPassword.message.length > 0
        }
        helperText={errors.confirmPassword && errors.confirmPassword.message}
        label="Confirm password"
        fullWidth
      />
      <PrimaryButton variant="contained" color="primary" type="submit">
        Register
      </PrimaryButton>
    </form>
  );
};

export default RegisterForm;
