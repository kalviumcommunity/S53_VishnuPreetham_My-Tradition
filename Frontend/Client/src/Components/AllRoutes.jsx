import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Profile from '../ComponentsLogin/Profile'
import Cart from './UserData/Cart'
import Contact from './Contact'
import States from './StatesLink/States'
import Products from './Products/Products'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='profile_user' element={<Profile/>}/>
        <Route path='user_cart' element={<Cart/>}/>
        <Route path='contact_company' element={<Contact/>}/>
        <Route path='States' element={<States/>}/>
        <Route path='States/products' element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
