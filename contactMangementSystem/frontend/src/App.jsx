import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { Toaster } from 'react-hot-toast';
import Dashboard from "./pages/Dashboard"
import Profile from "./components/Profile"
import AddContact from "./components/AddContact"
import Contacts from "./components/Contacts"
import Logout from "./components/Logout"
import EditContact from "./components/EditContact"

function App() {

  return (
    <>
      <BrowserRouter>
      <div><Toaster
      /></div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />}>
                    <Route path='/dashboard/profile' element={<Profile />} />
                    <Route path='/dashboard/add-contact' element={<AddContact />} />
                    <Route path='/dashboard/contacts' element={<Contacts />} />
                    <Route path='/dashboard/logout' element={<Logout />} />
                    <Route path='/dashboard/edit-contact/:id' element={<EditContact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
