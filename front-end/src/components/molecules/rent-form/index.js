import React from 'react';
import { useForm } from 'react-hook-form';
import { SignupSchema } from './schema';
import { TextField, PrimaryButton, SecondaryButton } from '../../atoms';
import { useStyles } from './styles';

const RentForm = (props) => {
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
        name="days"
        inputRef={register}
        error={errors.days && errors.days.message.length > 0}
        helperText={errors.days && errors.days.message}
        label="Days"
        fullWidth
      />
      <PrimaryButton variant="contained" color="primary" type="submit">
        RENT!
      </PrimaryButton>
      <SecondaryButton type="button">Cancel</SecondaryButton>
    </form>
  );
};

export default RentForm;
