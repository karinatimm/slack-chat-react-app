import React from 'react';
import { useNavigate } from 'react-router-dom';
import notFoundAvatar from '../../assets/imgNotFoundPage/404_error.png';
import { ROUTES } from '../../utils/router';

const NotFoundComponent = () => {
  const navigate = useNavigate();

  const handleHomePageClick = (event) => {
    event.preventDefault();
    navigate(ROUTES.homePage);
  };

  return (
    <div className="text-center mt-5">
      <img src={notFoundAvatar} alt="Page wasn't found" className="img-fluid" />
      <h1 className="h4 text-muted">Page Not Found</h1>
      <p className="text-muted">
        The page you are looking for does not exist. Go back to{' '}
        <a href={ROUTES.homePage} onClick={handleHomePageClick}>
          homepage
        </a>
      </p>
    </div>
  );
};

export default NotFoundComponent;
