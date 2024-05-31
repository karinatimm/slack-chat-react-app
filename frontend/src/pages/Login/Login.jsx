import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuthenticateLogin } from '../../api/authApi.js';
import { setUserData } from '../../store/entities/authSlice.js';
import { loginValidationSchema } from '../../utils/validationSchemas';
import LoginComponent from '../../components/LoginComponent.jsx';
import loginAvatar from '../../assets/imgLoginPage/avatar_login.png';
import { ROUTES } from '../../utils/router';
import useAuthContext from '../../hooks/useAuthContext.js';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useAuthenticateLogin();
  const { logIn } = useAuthContext();

  const handleFormSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await login(values).unwrap();
      logIn(response.token, values.username);
      dispatch(
        setUserData({ token: response.token, username: values.username })
      );
      setSubmitting(false);
      navigate(ROUTES.homePage);
    } catch (error) {
      setErrors({ general: 'Invalid username or password' });
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
            <h1 className="text-center mb-4">Войти</h1>
            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label htmlFor="username">
                Ваш ник
              </BootstrapForm.Label>
              <Field
                name="username"
                as={BootstrapForm.Control}
                type="text"
                id="username"
                placeholder="Введите имя пользователя"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger"
              />
            </BootstrapForm.Group>

            <BootstrapForm.Group className="mb-3">
              <BootstrapForm.Label htmlFor="password">
                Пароль
              </BootstrapForm.Label>
              <Field
                name="password"
                as={BootstrapForm.Control}
                type="password"
                id="password"
                placeholder="Введите пароль"
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
              Войти
            </Button>
          </Form>
        )}
      </Formik>
    </LoginComponent>
  );
};

export default Login;
