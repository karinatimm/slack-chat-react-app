import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

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

export const useChannelValidationSchema = () => {
  const { t } = useTranslation();
  const { channels } = useSelector((state) => state.appManaging);
  return Yup.object().shape({
    name: Yup.string()
      .min(3, t('homePage.modalWindow.errors.minLengthRequired'))
      .max(20, t('homePage.modalWindow.errors.maxLengthRequired'))
      .matches(/\S/, t('homePage.modalWindow.errors.requiredField'))
      .required(t('homePage.modalWindow.errors.requiredField'))
      .notOneOf(
        channels.map((channel) => channel.name),
        t('homePage.modalWindow.errors.uniqueName')
      ),
  });
};
