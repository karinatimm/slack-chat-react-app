import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as BootstrapForm, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuthenticateSignUp } from '../../api/authApi.js';
import { setUserData } from '../../store/entities/authSlice.js';
import { signUpValidationSchema } from '../../utils/validationSchemas';
import SignUpComponent from '../../components/SignUpComponent.jsx';
import signUpAvatar from '../../assets/imgSignUpPage/avatar_signUp.png';
import { ROUTES } from '../../utils/router';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp] = useAuthenticateSignUp();

  const handleFormSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await signUp(values).unwrap();
      dispatch(
        setUserData({ token: response.token, username: values.username })
      );
      setSubmitting(false);
      navigate(ROUTES.homePage);
    } catch (error) {
      setErrors({ general: 'Unable to sign up. Please try again later.' });
      setSubmitting(false);
    }
  };

  return (
    <SignUpComponent signUpAvatar={signUpAvatar}>
      <Formik
        initialValues={{
          username: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={signUpValidationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className="w-50">
            <h1 className="text-center mb-4">Регистрация</h1>
            <BootstrapForm.Group className="mb-3" controlId="username">
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

            <BootstrapForm.Group className="mb-3" controlId="password">
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

            <BootstrapForm.Group className=" mb-4" controlId="confirmPassword">
              <BootstrapForm.Label htmlFor="confirmPassword">
                Подтвердить пароль
              </BootstrapForm.Label>
              <Field
                name="confirmPassword"
                as={BootstrapForm.Control}
                type="password"
                id="confirmPassword"
                placeholder="Повторите пароль"
              />
              <ErrorMessage
                name="confirmPassword"
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
              className="w-100"
              disabled={isSubmitting}
              block
            >
              Войти
            </Button>
          </Form>
        )}
      </Formik>
    </SignUpComponent>
  );
};

export default SignUp;
