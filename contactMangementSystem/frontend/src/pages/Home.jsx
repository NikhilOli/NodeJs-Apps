import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Welcome to Contact Management System</h2>
                <p className="text-lg text-gray-700 mb-8">Manage your contacts with ease. Login or register to get started.</p>
                <div className="flex justify-center space-x-4">
                    <Link to="/login" className="text-indigo-500 hover:text-indigo-700 font-medium">Login</Link>
                    <span className="text-gray-500">or</span>
                    <Link to="/register" className="text-indigo-500 hover:text-indigo-700 font-medium">Register</Link>
                </div>
                <div className="mt-8 text-sm text-gray-500">
                    Don't have an account? <Link to="/register" className="text-indigo-500 hover:text-indigo-700 font-medium">Sign up here</Link>.
                </div>
            </div>
        </div>
    );
};

export default Home;
