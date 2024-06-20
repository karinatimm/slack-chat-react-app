import { createContext } from 'react';
import { DEFAULT_AUTH_CONTEXT_VALUE } from '../../utils/config';

const AuthContext = createContext(DEFAULT_AUTH_CONTEXT_VALUE);

export { AuthContext, DEFAULT_AUTH_CONTEXT_VALUE };
