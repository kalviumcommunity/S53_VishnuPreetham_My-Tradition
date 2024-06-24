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
import Order from '../UserData/Order'
import FullProduct from '../Products/FullProduct'
import Payment from '../Products/Payment'
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='profile_user' element={<Profile/>}/>
        <Route path='user_cart' element={<Cart/>}/>
        <Route path='wishlist' element={<Wishlist/>} />
        <Route path='signin' element={<Signin/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route path='products_page' element={<Products/>}/>
        <Route path='fullProduct' element={<FullProduct/>}/>
        <Route path='myOrders' element={<Order/>}/>
        <Route path='payment' element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
