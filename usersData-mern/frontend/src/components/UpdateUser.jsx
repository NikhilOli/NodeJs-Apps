import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState()
  const [gender, setGender] = useState("")
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:4000/users/getUser/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const result = await response.json();
        setName(result.name)
        setEmail(result.email)
        setAge(result.age)
        setGender(result.gender)
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to fetch user data');
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { name, email, age, gender };
      const response = await fetch(`http://localhost:4000/users/updateUser/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedUser),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const result = await response.json();
      if (!response.ok) {
        toast.error(`Error: ${result.error}`);
      } else {
        setTimeout(() => {
          toast.success("User updated successfully!");
          
        }, 500);
        navigate("/users")
      }
    } catch (error) {
      console.error("Error updaing user:", error);
      toast.error("An error occurred while updating the user.");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6 mt-4">
      <h2 className="text-lg font-semibold mb-4">Update User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
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
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Gender:</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
        >
          Update User
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateUser;
