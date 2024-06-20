import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext.js';
import { ROUTES } from '../../utils/router.js';

const MainNav = () => {
  const { isAuthenticated, logOut } = useAuthContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut();
    navigate(ROUTES.homePage);
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    navigate(ROUTES.homePage);
  };

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a
          href={ROUTES.homePage}
          className="navbar-brand"
          role="button"
          onClick={handleHomeClick}
          style={{ cursor: 'pointer' }}
        >
          Hexlet Chat
        </a>
        {isAuthenticated && (
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleLogOut}
          >
            {t('homePage.button.logOutButton')}
          </button>
        )}
      </div>
    </nav>
  );
};

export default MainNav;
