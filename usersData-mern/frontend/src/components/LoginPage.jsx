import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:4000/users/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, age }),
            });
            const result = await response.json();
            if (response.ok) {
                setTimeout(() => {
                    toast.success(result.message);   
                }, 500);
                navigate("/");
            } else if (response.status === 404) {
                toast.error(result.message);
                return;
            } else {
                toast.error("An error occurred while logging in.");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            toast.error("An error occurred while logging in.");
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 mt-4">
            <h2 className="text-lg font-semibold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1">Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
                >
                    Login
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
