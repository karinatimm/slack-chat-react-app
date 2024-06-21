import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import notFoundAvatar from '../../assets/imgNotFoundPage/404_error.png';
import { ROUTES } from '../../utils/router';

const NotFoundComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center mt-5">
      <img
        src={notFoundAvatar}
        alt={t('notFoundPage.img.notFoundAlt')}
        className="img-fluid"
      />
      <h1 className="h4 text-muted">{t('notFoundPage.notFoundPageTitle')}</h1>
      <p className="text-muted">
        {t('notFoundPage.notFoundPageText')}
        {' '}
        <Link to={ROUTES.homePage}>{t('notFoundPage.notFoundPageLink')}</Link>
      </p>
    </div>
  );
};

export default NotFoundComponent;
