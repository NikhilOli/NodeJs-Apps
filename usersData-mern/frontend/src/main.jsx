import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../src/components/Navbar.jsx'
import UserDataCard from '../src/components/UserDataCard.jsx'
import UpdateUser from '../src/components/UpdateUser.jsx'
import LoginPage from '../src/components/LoginPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/users' element={<UserDataCard />} />
      <Route path='/:id' element={<UpdateUser />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
