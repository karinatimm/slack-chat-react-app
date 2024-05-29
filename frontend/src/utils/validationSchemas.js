import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

export const signUpValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be maximum 20 characters')
    .required('Username is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm password is required'),
});
