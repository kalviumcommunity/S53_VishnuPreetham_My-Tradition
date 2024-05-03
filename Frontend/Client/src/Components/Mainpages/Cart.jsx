import React from 'react';
import Navbar from './Navbar';
import { useContext } from 'react';
import { AppContext } from '../../Context/ParentContext';
import logo from "../../Assets/Logo.png";
import "../../App.css";
import cartAnimation from "../../Assets/Animation - 1714737768706.json";
// Import Lottie from react-lottie library
import Lottie from "react-lottie";


const Cart = () => {
    const { signin } = useContext(AppContext);
    const Animation = {
        loop: true,
        autoplay: true,
        animationData: cartAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };
    return (
        <div>
            <Navbar />
            {!signin && (
                <div className="check" style={{ marginTop: "25vh" }}>
                    <p>You have not logged in, please login for access.</p>
                    <p>Please do login.</p>
                    <div className="lottiesanimation">
                        <Lottie options={Animation} height={200} width={200} />
                    </div>
                    <button>SIGNUP</button>
                    <button>LOGIN</button>
                </div>
            )}
        </div>
    );
}

export default Cart;
