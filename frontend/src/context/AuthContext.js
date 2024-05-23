import { createContext } from 'react';

const defaultAuthContextValue = {
  isAuthenticated: false,
  logIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext(defaultAuthContextValue);

export { AuthContext, defaultAuthContextValue };
