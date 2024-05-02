import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React from 'react'
import { useForm } from 'react-hook-form';
import { auth, db } from "../firebase/firebase"
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const navigate=useNavigate()
    // xxxxxxx   Track Order     xxxxxxx //
    const orderData=[

    ]
    // xxxxxxx   User Creation   xxxxxxx //
    const onSubmit = async(data) => {
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
                wishlist:[],
                DelivaryAddress:[],
                AddToCart:[],
                MyOrders:[],
                TrackOrder:{},
                phoneNumber:" "



                
            });
            // navigate("/");
            console.log("success signup")
        } catch (err) {
            console.log("err: ", err);
            // setError(err.message);
            // setLoading(false);
}

    };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
        />
        {errors.name && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          {...register('email', { required: true })}
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          {...register('password', { required: true })}
        />
        {errors.password && <span>This field is required</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
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