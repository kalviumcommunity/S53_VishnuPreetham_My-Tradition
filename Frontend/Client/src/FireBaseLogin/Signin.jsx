import React from 'react'
import { useForm } from 'react-hook-form';
import {CloseSquare} from "iconsax-react";
import logo from "../Assets/Logo.png"
import { useContext } from 'react';
import { AppContext } from '../Context/ParentContext';
import "../App.css"
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Mainpages/Navbar';

const Signin = () => {
  const{setUser,setSignin,signin,setOpen,} =useContext(AppContext);
  const navigate=useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
            .then((data) => {
                console.log(data);
                // alert(`Your successfully logged in ${data.email} ${signin}`)
                navigate("/")

            })
            .catch((error) => {
                setError(error.message);
            });
}
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
        setUser(user)
        setSignin(true)
        navigate("/");
    } else {
        console.log('err')
        }
    })

  return (
    <div>
              <Navbar/>
      <div class="form-container">
      <div className="logos" style={{
      }}> 

      {/* <img src={logo} alt="" /> */}
      </div>
  <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label class="form-label"  htmlFor="email">Email:</label>
      <input class="form-input" placeholder='Enter your Email' type="email" id="email" {...register('email', { required: true })} />
      {errors.email && <span class="error-message">This field is required</span>}
    </div>
    <div>
      <label class="form-label"  htmlFor="password">Password:</label>
      <input class="form-input" placeholder='Enter Password' type="password" id="password" {...register('password', { required: true })} />
      {errors.password && <span class="error-message">This field is required</span>}
    </div>
    <button class="submit-button" type="submit">Login</button>
  </form>
</div>
{/* <p>{user.email}</p>
<p>{user.password}</p>
<img src={user.photoURL} alt="" /> */}
    </div>
  )
}

export default Signin
