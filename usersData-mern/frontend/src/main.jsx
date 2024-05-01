import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import UserDataCard from './UserDataCard.jsx'
import UpdateUser from './UpdateUser.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/users' element={<UserDataCard />} />
      <Route path='/:id' element={<UpdateUser />} />

    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
