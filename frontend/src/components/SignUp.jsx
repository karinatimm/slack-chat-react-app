/* eslint-disable jsx-a11y/img-redundant-alt */

const SignupComponent = ({ children, signUpAvatar }) => (
  <div className="container-fluid h-100">
    <div
      className="row justify-content-center align-content-center h-100"
      style={{ minHeight: '100vh' }}
    >
      <div className="col-12 col-md-8 col-xxl-6">
        <div className="card shadow-sm">
          <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
            <div>
              <img
                src={signUpAvatar}
                alt="SignUp Image"
                className="rounded-circle img-fluid"
              />
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SignupComponent;
