import React from 'react';
import { useForm } from 'react-hook-form';
import { SignupSchema } from './schema';
import Button from '@material-ui/core/Button';
import { TextField } from '../../atoms';
import { useStyles } from './styles';

const LoginForm = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema,
  });

  const onSubmit = (data) => {
    props.auth(null, data.email, data.password);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
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
      <Button variant="contained" color="primary" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
