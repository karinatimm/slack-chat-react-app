import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  Container,
  Row,
  Col,
  Form as BootstrapForm,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col md="4">
            <h2 className="text-center">Login</h2>
            <Formik
              initialValues={{ username: '', password: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <BootstrapForm.Group className="mb-3" controlId="username">
                    <BootstrapForm.Label htmlFor="username">
                      Username
                    </BootstrapForm.Label>
                    <Field
                      name="username"
                      as={BootstrapForm.Control}
                      type="text"
                      id="username"
                      placeholder="Enter username"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group className="mb-3" controlId="password">
                    <BootstrapForm.Label htmlFor="password">
                      Password
                    </BootstrapForm.Label>
                    <Field
                      name="password"
                      as={BootstrapForm.Control}
                      type="password"
                      id="password"
                      placeholder="Enter password"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </BootstrapForm.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    block
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
