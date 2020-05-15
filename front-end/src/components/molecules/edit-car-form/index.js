import React from 'react';
import { useForm } from 'react-hook-form';
import { SignupSchema } from './schema';
import { TextField, PrimaryButton, InputAdornment } from '../../atoms';
import { useStyles } from './styles';

const EditCarForm = ({ car, addCar }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm({
    validationSchema: SignupSchema,
  });

  const onSubmit = (data) => {
    addCar(car._id, data);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
      <TextField
        name="model"
        inputRef={register}
        defaultValue={car.model}
        error={errors.model && errors.model.message.length > 0}
        helperText={errors.model && errors.model.message}
        label="Car model"
        fullWidth
      />
      <TextField
        name="image"
        inputRef={register}
        defaultValue={car.image}
        error={errors.image && errors.image.message.length > 0}
        helperText={errors.image && errors.image.message}
        label="Image URL"
        fullWidth
      />
      <TextField
        name="year"
        type="number"
        inputRef={register}
        defaultValue={car.year}
        error={errors.year && errors.year.message.length > 0}
        helperText={errors.year && errors.year.message}
        label="Year made"
        fullWidth
      />
      <TextField
        name="city"
        inputRef={register}
        defaultValue={car.city}
        error={errors.city && errors.city.message.length > 0}
        helperText={errors.city && errors.city.message}
        label="City"
        fullWidth
      />
      <TextField
        name="pricePerDay"
        type="number"
        inputRef={register}
        defaultValue={car.pricePerDay}
        error={errors.pricePerDay && errors.pricePerDay.message.length > 0}
        helperText={errors.pricePerDay && errors.pricePerDay.message}
        label="Price per day"
        fullWidth
        InputProps={{
          startAdornment: <InputAdornment position="start">Lv.</InputAdornment>,
        }}
      />
      <PrimaryButton variant="contained" color="primary" type="submit">
        EDIT CAR
      </PrimaryButton>
    </form>
  );
};

export default EditCarForm;
