import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState()
  const [gender, setGender] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addUser = { name, email, age, gender };
      const response = await fetch("http://localhost:4000/users/addUser", {
        method: 'POST',
        body: JSON.stringify(addUser),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(`Error: ${result.error}`);
      } else {
        toast.success("User created successfully!");
        setName("");
        setEmail("");
        setAge("");
        setGender("");
      }
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("An error occurred while creating the user.");
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">User Management</h1>
        <div className="flex justify-between items-center mb-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            type="submit"
          >
            Create New User
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Refresh
          </button>
        </div>
        {/* Add User Form */}
        <form className="mb-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="number"
              placeholder="Enter age"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select

              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="shadow appearance-none  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="gender"
            >
              <option value="" disabled>Select gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Add User
          </button>
        </form>
        {/* User List */}
        {/* <ul className="grid gap-4">
                <li className="bg-gray-100 p-4 rounded-md shadow-md">
                    <div>
                        <span className="font-bold">Name:</span> John Doe
                    </div>
                    <div>
                        <span className="font-bold">Email:</span> johndoe@example.com
                    </div>
                    <div>
                        <span className="font-bold">Age:</span> 30
                    </div>
                    <div>
                        <span className="font-bold">Gender:</span> Male
                    </div>
                    <div className="mt-4">
                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded mr-2">
                            Update
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                            Delete
                        </button>
                    </div>
                </li>
                {/* Add more user items here */}
        {/* </ul> } */}
      </div>
    </>
  );
};

export default App;
