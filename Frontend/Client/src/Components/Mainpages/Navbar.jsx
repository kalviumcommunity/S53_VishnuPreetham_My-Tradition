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
    const { signin} = useContext(AppContext);

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
                        <Link to={"user_cart"}>
                            <Bag2
                                className='Bag2'
                                size="32"
                                color="#f5ddb0"
                            />
                        </Link>
                        <Link to={"signup"} style={{
                            display: signin ? "none" : "block"
                        }}>
                                <Login size="32" color="#ebc5a1" /></Link>
                            
                        <Link to={"profile_user"} style={{display: signin ? "block" : "none"}}>
                            
                                <ProfileCircle className='ProfileCircle' size="32" color="#ebc5a1" />
                            
                        </Link>
                        <Link to={"wishlist"}>
                            <Heart className='Heart' size="32" color="#ebc5a1" />
                        </Link>
                    </div>
                </div>
            </div>
           
        </div >
    )
}

export default Navbar;
