import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useAuthContext from '../../hooks/useAuthContext.js';
import { ROUTES } from '../../utils/router.js';

const MainNav = () => {
  const { isAuthenticated, logOut } = useAuthContext();
  const { t } = useTranslation();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link to={ROUTES.homePage} className="navbar-brand">
          Slack Chat
        </Link>
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
