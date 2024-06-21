import * as Yup from 'yup';

export const getLoginValidationSchema = (t) => Yup.object().shape({
  username: Yup.string().required(t('logInPage.errors.requiredField')),
  password: Yup.string().required(t('logInPage.errors.requiredField')),
});

export const getSignUpValidationSchema = (t) => Yup.object().shape({
  username: Yup.string()
    .min(3, t('signUpPage.errors.minLengthOfUserName'))
    .max(20, t('signUpPage.errors.maxLengthOfUserName'))
    .required(t('signUpPage.errors.requiredField')),
  password: Yup.string()
    .min(6, t('signUpPage.errors.minLengthOfPassword'))
    .required(t('signUpPage.errors.requiredField')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], t('signUpPage.errors.matchingPassword'))
    .required(t('signUpPage.errors.requiredField')),
});

export const getChannelValidationSchema = (t, channels) => Yup.object().shape({
  name: Yup.string()
    .min(3, t('homePage.modalWindow.errors.minLengthRequired'))
    .max(20, t('homePage.modalWindow.errors.maxLengthRequired'))
    .matches(/\S/, t('homePage.modalWindow.errors.requiredField'))
    .required(t('homePage.modalWindow.errors.requiredField'))
    .notOneOf(
      channels.map((channel) => channel.name),
      t('homePage.modalWindow.errors.uniqueName'),
    ),
});
