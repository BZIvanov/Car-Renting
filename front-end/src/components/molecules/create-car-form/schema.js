import * as yup from 'yup';
import * as constants from '../../../constants';

export const SignupSchema = yup.object().shape({
  model: yup
    .string()
    .trim()
    .required()
    .min(constants.TEXT_VERY_SHORT)
    .max(constants.TEXT_LONG),
  image: yup.string().required().url().max(constants.TEXT_VERY_LONG),
  year: yup.number().required().min(constants.MIN_YEAR).max(constants.MAX_YEAR),
  city: yup
    .string()
    .trim()
    .required()
    .min(constants.TEXT_VERY_SHORT)
    .max(constants.TEXT_LONG),
  pricePerDay: yup
    .number()
    .required()
    .min(constants.MIN_PRICE)
    .max(constants.MAX_PRICE),
});
