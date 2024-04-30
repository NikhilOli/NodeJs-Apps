import React, { useEffect, useState } from 'react';

const UserDataCard = () => {
    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const response = await fetch("http://localhost:4000/users/showUsers")
        const result = await response.json();
        console.log(result);
        setUsers(result)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 mx-6">
            {users.map((user) => (
                <div key={user.age} className="bg-white p-4 shadow-md rounded-md">
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
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mr-2">
                            Update
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserDataCard;
