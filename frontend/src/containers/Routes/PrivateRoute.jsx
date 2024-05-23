import { Navigate } from 'react-router-dom';
import useAuthContext from '../../hooks/useAuthContext.js';
import { ROUTES } from '../../utils/router';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? children : <Navigate to={ROUTES.login} />;
};

export default PrivateRoute;
