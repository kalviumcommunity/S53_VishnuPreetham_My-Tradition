import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Profile from '../UserData/Profile'
import Cart from '../Mainpages/Cart'
import States from '../StatesLink/States'
import Products from '../Products/Products'
import Signin from '../../FireBaseLogin/Signin'
import Signup from '../../FireBaseLogin/Signup'
import Wishlist from './Wishlist'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='profile_user' element={<Profile/>}/>
        <Route path='user_cart' element={<Cart/>}/>
        <Route path='wishlist' element={<Wishlist/>} />
        <Route path='States' element={<States/>}/>
        <Route path='States/products' element={<Products/>}/>
        <Route path='signup/signin' element={<Signin/>}/>
        <Route path='signup' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
