import { useContext } from 'react';
import { AuthContext } from '../context/authentication/AuthContext.js';

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
