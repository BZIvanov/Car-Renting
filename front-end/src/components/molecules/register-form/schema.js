import * as yup from 'yup';
import * as constants from '../../../constants';

export const SignupSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required()
    .min(constants.TEXT_VERY_SHORT)
    .max(constants.TEXT_LONG),
  email: yup.string().required().email().max(constants.TEXT_LONG),
  password: yup
    .string()
    .trim()
    .required()
    .min(constants.TEXT_MID_LENGTH)
    .max(constants.TEXT_LONG),
  confirmPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password'), null], constants.PASSWORDS_MISMATCH)
    .required(),
});
