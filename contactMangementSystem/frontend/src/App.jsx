import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import { Toaster } from 'react-hot-toast';
import Dashboard from "./pages/Dashboard"


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
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
