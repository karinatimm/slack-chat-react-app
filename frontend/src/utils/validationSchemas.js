import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

export const useLoginValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
    username: Yup.string().required(t('logInPage.errors.requiredField')),
    password: Yup.string().required(t('logInPage.errors.requiredField')),
  });
};

export const useSignUpValidationSchema = () => {
  const { t } = useTranslation();

  return Yup.object().shape({
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
};
