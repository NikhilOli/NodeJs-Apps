import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../App';


const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    return user ? children : <Navigate to="/login" replace />
};

export default ProtectedRoute;
