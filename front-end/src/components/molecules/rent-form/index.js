import React from 'react';
import { useForm } from 'react-hook-form';
import { SignupSchema } from './schema';
import {
  TextField,
  PrimaryButton,
  SecondaryButton,
  Typography,
} from '../../atoms';
import { useStyles } from './styles';

const RentForm = (props) => {
  const { car, onRentCar, onRentToggle } = props;
  const classes = useStyles();
  const { register, handleSubmit, errors, watch } = useForm({
    validationSchema: SignupSchema,
  });

  const watchDays = watch('days', 0);

  const onSubmit = (data) => {
    onRentCar(car._id, data.days);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h6" color="primary">
        Total price:{' '}
        <span className={classes.price}>
          {(watchDays * car.pricePerDay).toFixed(2)}
        </span>{' '}
        lv.
      </Typography>
      <form
        className={classes.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          name="days"
          inputRef={register({ maxLength: 3 })}
          error={errors.days && errors.days.message.length > 0}
          helperText={errors.days && errors.days.message}
          label="Days (1-7)"
          type="number"
          fullWidth
        />
        <PrimaryButton variant="contained" color="primary" type="submit">
          RENT!
        </PrimaryButton>
        <SecondaryButton
          variant="contained"
          color="primary"
          type="button"
          onClick={onRentToggle}
        >
          Cancel
        </SecondaryButton>
      </form>
    </div>
  );
};

export default RentForm;
