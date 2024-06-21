import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAuthenticateUserLogIn } from '../../api/authApi.js';
import { setUserData } from '../../store/entities/authSlice.js';
import { getLoginValidationSchema } from '../../utils/validationSchemas.js';
import LoginComponent from '../../components/PagesComponents/LogIn.jsx';
import loginAvatar from '../../assets/imgLoginPage/avatar_login.png';
import { ROUTES } from '../../utils/router.js';
import useAuthContext from '../../hooks/useAuthContext.js';
import useToast from '../../hooks/useToast';

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logInRequest] = useAuthenticateUserLogIn();
  const { logIn } = useAuthContext();
  const loginValidationSchema = getLoginValidationSchema(t);
  const showToastMessage = useToast();

  const handleFormSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await logInRequest(values).unwrap();
      logIn(response.token, values.username);
      dispatch(
        setUserData({ token: response.token, username: values.username }),
      );
      setSubmitting(false);
      navigate(ROUTES.homePage);
    } catch (error) {
      const { status } = error;

      switch (status) {
        case 'FETCH_ERROR':
          showToastMessage(t('logInPage.errors.networkError'), {
            type: 'error',
          });
          break;
        case 401:
          setErrors({ password: t('logInPage.errors.invalidCredentials') });
          break;
        default:
          showToastMessage(t('logInPage.errors.unknownError'), {
            type: 'error',
          });
          break;
      }
      setSubmitting(false);
    }
  };

  return (
    <LoginComponent loginAvatar={loginAvatar}>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={loginValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className="col-12 col-md-6 mt-3 mt-mb-0">
            <h1 className="text-center mb-4">
              {t('logInPage.form.formTitle')}
            </h1>
            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label htmlFor="username">
                {t('logInPage.form.username')}
              </BootstrapForm.Label>
              <Field
                name="username"
                as={BootstrapForm.Control}
                type="text"
                id="username"
                placeholder={t('logInPage.form.placeolderForUserField')}
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger"
              />
            </BootstrapForm.Group>

            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label htmlFor="password">
                {t('logInPage.form.password')}
              </BootstrapForm.Label>
              <Field
                name="password"
                as={BootstrapForm.Control}
                type="password"
                id="password"
                placeholder={t('logInPage.form.placeolderForPasswordField')}
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
            </BootstrapForm.Group>

            {errors.general && (
              <div className="text-danger mb-3">{errors.general}</div>
            )}

            <Button
              type="submit"
              variant="outline-primary"
              disabled={isSubmitting}
              className="w-100"
            >
              {t('logInPage.button.logInButton')}
            </Button>
            <ToastContainer />
          </Form>
        )}
      </Formik>
    </LoginComponent>
  );
};

export default Login;
