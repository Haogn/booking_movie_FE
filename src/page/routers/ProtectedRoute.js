import React from 'react';
import { Navigate } from 'react-router-dom';
import { isAdmin } from './authHelpers'; 

const ProtectedRoute = ({ children }) => {
  return isAdmin() ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;