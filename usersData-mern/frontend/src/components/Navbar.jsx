import React from 'react';
import { Link } from 'react-router-dom';
import { MdDarkMode, MdLogin, MdLogout } from "react-icons/md";


const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 px-8">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className='flex justify-center items-center gap-6'>
                        <Link to="/" className="text-white font-bold text-xl">User Management</Link>
                        <Link to="/users" className="text-white hover:underline">View Users</Link>
                    </div>
                    <div className='text-white flex justify-center items-center gap-2'>
                        <h4>Logout</h4>
                        <MdDarkMode size={24} />
                        <Link to="/login"><MdLogout size={24} /></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
