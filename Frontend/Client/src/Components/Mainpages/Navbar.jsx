import React, { useState } from 'react';
import "../../App.css";
import logo from "../../Assets/Logo.png";
import { Link, useNavigate } from 'react-router-dom';
import { Bag2 } from "iconsax-react";
import { ProfileCircle } from "iconsax-react";
import { Heart } from "iconsax-react";
import { useContext } from 'react';
import { AppContext } from '../../Context/ParentContext';
import { Login } from 'iconsax-react';

const Navbar = () => {
    const { signin } = useContext(AppContext);
    const navigate = useNavigate()
    return (
        <div>
            <div className="mainnav">
                <div className="top_quote">
                    <p>MAKE YOUR CULTURE MORE EXPRESSIVE WITH YOUR TRADITIONS</p>
                </div>
                <div className="navbar">
                    <div className="GenderType">
                        <p>WOMEN</p>
                        <p>MEN</p>
                        <p>BRIDAL</p>
                        <p>FESTIVAL</p>
                    </div>
                    <div
                        className="Logo"
                        style={{
                            height: '100%',
                            textAlign: 'center',
                            backgroundImage: `url(${logo})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            width: '33%'
                        }}
                    ></div>
                    <div className="CartBoxes">
                        <Bag2
                            className='Bag2'
                            size="32"
                            color="#f5ddb0"
                            onClick={() => { navigate("/user_cart") }}
                        />
                        {signin ? (<ProfileCircle onClick={() => { navigate("/profile_user") }} className='ProfileCircle'  color="#ebc5a1" />) : (<Login className='Login' size="32" onClick={() => { navigate("/signup") }} color="#ebc5a1" />)}
                        <Heart onClick={() => { navigate("/wishlist") }} className='Heart' size="32" color="#ebc5a1" />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Navbar;
