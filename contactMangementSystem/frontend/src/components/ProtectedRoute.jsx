import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ children }) => {
    const token = document.cookie.split('; ').find(row => row.startsWith('token='));
    return token ? children : <Navigate to="/login" replace />
};

export default ProtectedRoute;
