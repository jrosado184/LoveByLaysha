import * as yup from 'yup';

export const bookingSchema = yup.object().shape({
  time: yup.string().required(),
  name: yup.string().required(),
  phone: yup.number().required(),
  email: yup.string().email().required(),
});
