import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { auth, db } from "../firebase/firebase"
import { doc, setDoc } from 'firebase/firestore';
import logo from "../Assets/Logo.png"
import { CloseSquare } from "iconsax-react";
import "../App.css"
import { AppContext } from '../Context/ParentContext';
import { useNavigate,Link } from 'react-router-dom';
import Navbar from '../Components/Mainpages/Navbar';

const Signup = () => {
  const navigate = useNavigate();
  const { setSignin, signin, setUser} = useContext(AppContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  // const navigate=useNavigate()
  // xxxxxxx   Track Order     xxxxxxx //
  const orderData = [

  ]
  // xxxxxxx   User Creation   xxxxxxx //
  const onSubmit = async (data) => {
    console.log(data);
    // setLoading(true);
    // setError("");
    const email = data.email;
    const password = data.password
    const displayName = data.name;
    const defaultProfile = 'https://firebasestorage.googleapis.com/v0/b/pawsitive-64728.appspot.com/o/Group%2035913.png?alt=media&token=857c7bc3-4f1f-47d6-ba8b-355944132384'
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: defaultProfile,
      });
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
        photoURL: defaultProfile,
        wishlist: [],
        DelivaryAddress: [],
        AddToCart: [],
        MyOrders: [],
        TrackOrder: {},
        phoneNumber: " "
      });
      setSignin(true);
      setUser(data)
      navigate("/profile_user");

      console.log("success signup")
    } catch (err) {
      console.log("err: ", err);
      // setError(err.message);
      // setLoading(false);
    }

  };
  return (
<div>

      <Navbar/>
      <div className="form-container" >

        {/* <div className="logos" style={{
        }}>

          <img src={logo} alt="" />
          
        </div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
        <CloseSquare onClick={() => {
            setOpen(false);
          }} size="32" color="#E0B04F" style={{ cursor: "pointer" }} />
          <div>
            <label class="form-label" htmlFor="name">Name:</label>
            <input class="form-input" placeholder='Please Enter your name' type="text" id="name" {...register('name', { required: true })} />
            {errors.name && <span class="error-message">This field is required</span>}
          </div>
          <div>
            <label class="form-label" htmlFor="email">Email:</label>
            <input class="form-input" placeholder='Please Enter your Email' type="email" id="email" {...register('email', { required: true })} />
            {errors.email && <span class="error-message">This field is required</span>}
          </div>
          <div>
            <label class="form-label" htmlFor="password">Password:</label>
            <input class="form-input" placeholder='Please Set your password' type="password" id="password" {...register('password', { required: true })} />
            {errors.password && <span class="error-message">This field is required</span>}
          </div>
          <Link to="signin"><p>User Already Exsits ?</p></Link>
          <button class="submit-button" type="submit">Submit</button>
        </form>
      </div>
      </div>
  )
}

export default Signup

/*
const handleSignup = async (e) => {
        e.preventDefault();
        if (!agreeTAndC) {
            setError("Please agree to the terms and conditions.");
            return;
        }
        setLoading(true);
        setError("");
        const email = userCredentials.email;
        const password = userCredentials.password
        const displayName = userCredentials.name;
        const defaultProfile = 'https://firebasestorage.googleapis.com/v0/b/pawsitive-64728.appspot.com/o/Group%2035913.png?alt=media&token=857c7bc3-4f1f-47d6-ba8b-355944132384'
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(auth.currentUser, {
                displayName,
                photoURL: defaultProfile,
            });
            await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: defaultProfile,
                favPets:[]
            });
            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
        } catch (err) {
            console.log("err: ", err);
            setError(err.message);
            setLoading(false);
        }
    };

*/