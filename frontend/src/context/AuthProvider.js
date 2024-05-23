import React, { useState, useEffect } from 'react';
import { AuthContext, defaultAuthContextValue } from './AuthContext.js';

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authValue, setAuthValue] = useState(defaultAuthContextValue);

  const logIn = () => setIsAuthenticated(true);
  const logOut = () => setIsAuthenticated(false);

  useEffect(() => {
    setAuthValue({
      isAuthenticated,
      logIn,
      logOut,
    });
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
