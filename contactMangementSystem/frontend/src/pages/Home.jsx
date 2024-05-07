// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-gray-700 p-6 rounded-lg shadow-md">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Welcome to Contact Management System</h2>
                </div>
                <div className="mt-8">
                    <p className="text-lg text-gray-300 text-center">Please <Link to="/login" className="font-medium text-indigo-300 hover:text-indigo-200">login</Link> or <Link to="/register" className="font-medium text-indigo-300 hover:text-indigo-200">register</Link> to access your contacts.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
