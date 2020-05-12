import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
  days: yup.number().required().min(1).max(7),
});
