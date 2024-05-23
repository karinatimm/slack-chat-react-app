import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
