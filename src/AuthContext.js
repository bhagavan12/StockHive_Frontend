import React, { createContext, useState } from 'react';

// Create the authentication context
export const AuthContext = createContext();

// Create a provider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);

  // Function to handle login
  const login = () => {
    setLogged(true);
  };

  // Function to handle logout
  const logout = () => {
    setLogged(false);
  };

  // Value object to be provided by the context
  const authContextValue = {
    logged,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
