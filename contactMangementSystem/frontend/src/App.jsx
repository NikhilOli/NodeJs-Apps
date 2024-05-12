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
import { createContext, useState } from "react"
import ProtectedRoute from "./components/ProtectedRoute"
import PageNotFound from "./pages/PageNotFound"


export const UserContext = createContext(null)
function App() {

  const [user, setUser] = useState()
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <div><Toaster
          /></div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route element={<ProtectedRoute />}> */}
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path='/dashboard/profile' element={<Profile />} />
              <Route path='/dashboard/add-contact' element={<AddContact />} />
              <Route path='/dashboard/contacts' element={<Contacts />} />
              <Route path='/dashboard/logout' element={<Logout />} />
              <Route path='/dashboard/edit-contact/:id' element={<EditContact />} />
            </Route>
            {/* </Route> */}
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
