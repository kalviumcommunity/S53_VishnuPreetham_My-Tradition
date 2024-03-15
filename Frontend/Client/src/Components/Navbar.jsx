import React from 'react'
import "../App.css"
import logo from "./Logo.png"
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate=useNavigate()
    return (
        <div>
            <div className="navbar">


                <div className="Logo">
                    <img src={logo} alt="" />
                    <h3>My-Tradition</h3>

                </div>
                <div className='Routes'>
                    <Link to={"/"} style={{textDecoration:"none"}}>
                    <h3>Home</h3>
                    </Link>
                    <Link to={"about"} style={{textDecoration:"none"}}>
                    <h3>About</h3>
                    </Link>
                    <Link to={"contact_company"} style={{textDecoration:"none"}}>
                    <h3>Contact Us</h3>
                    </Link>
                </div>
                <div className="CartBoxes">
                    <Link to={"profile_user"}>
                    <img  src="https://cdn-icons-png.flaticon.com/128/456/456283.png" alt="" />
                    </Link>
                    <Link to={"user_cart"}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="" />
                    </Link>
                    <img src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Navbar
