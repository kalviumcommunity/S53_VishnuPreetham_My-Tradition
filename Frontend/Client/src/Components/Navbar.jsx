import React from 'react'
import "../App.css"
import logo from "./Logo.png"
const Navbar = () => {
    return (
        <div>
            <div className="navbar">


                <div className="Logo">
                    <img src={logo} alt="" />
                    <h3>My-Tradition</h3>

                </div>
                <div className='Routes'>
                    <h3>Home</h3>
                    <h3>About</h3>
                    <h3>Contact Us</h3>
                </div>
                <div className="CartBoxes">
                    <img src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
