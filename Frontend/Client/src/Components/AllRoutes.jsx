import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from '../ComponentsLogin/Profile'
import Cart from './UserData/Cart'
import Contact from './Contact'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='profile_user' element={<Profile/>}/>
        <Route path='user_cart' element={<Cart/>}/>
        <Route path='contact_company' element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
