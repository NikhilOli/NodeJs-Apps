import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDataCard = () => {
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch("http://localhost:4000/users/showUsers");
        const result = await response.json();
        setUsers(result);
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/users/deleteUser/${id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                const result = await response.json();
                getUsers();
                toast.success("User deleted successfully!");
            } else {
                const error = await response.json();
                toast.error(`Error: ${error.message}`);
            }
        } catch (error) {
            console.error("Error deleting user:", error);
            toast.error("An error occurred while deleting the user.");
        }
    };

    // const handleUpdate = async (id) => {
    //     try {
    //         const response = await fetch(`http://localhost:4000/users/deleteUser/${id}`, {
    //             method: "PATCH",
    //             body: 
    //         });
    //     } catch (error) {
    //         console.error("Error updating user:", error);
    //         toast.error("An error occurred while updating the user.");
    //     }
    // }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <ToastContainer />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 mx-6">
            {users.map((user) => (
                <div key={user._id} className="bg-white p-4 shadow-md rounded-md">
                    <div>
                        <span className="font-bold">Name:</span> {user.name}
                    </div>
                    <div>
                        <span className="font-bold">Email:</span> {user.email}
                    </div>
                    <div>
                        <span className="font-bold">Age:</span> {user.age}
                    </div>
                    <div>
                        <span className="font-bold">Gender:</span> {user.gender}
                    </div>
                    <div className="mt-4">
                        <Link to={`/${user._id}`} onClick={() => handleUpdate(user._id)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mr-2">
                            Update
                        </Link>
                        <button onClick={() => handleDelete(user._id)} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default UserDataCard;
