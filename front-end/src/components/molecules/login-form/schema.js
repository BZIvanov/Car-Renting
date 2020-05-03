import * as yup from 'yup';
import * as constants from '../../../constants';

export const SignupSchema = yup.object().shape({
  email: yup.string().required().email().max(constants.TEXT_LONG),
  password: yup
    .string()
    .trim()
    .required()
    .min(constants.TEXT_MID_LENGTH)
    .max(constants.TEXT_LONG),
});
