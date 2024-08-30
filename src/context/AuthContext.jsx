// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('access_token'));

  const logout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
  };

  const login = (token) => {
    localStorage.setItem('access_token', token);
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
