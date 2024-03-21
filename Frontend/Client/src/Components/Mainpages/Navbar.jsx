import React from 'react'
import "../../App.css"
import logo from "./vecteezy_traditional-colorful-floral-pattern-logo-design-template_7559007-ai.png"
import { Link } from 'react-router-dom'
import { Bag2 } from "iconsax-react"
const Navbar = () => {
    return (
        <div>
            <div className="top_quote">
            <p>MAKE YOUR CULTURE MORE EXPRESSIVE WITH YOUR TRADITIONS</p>
            </div>
            <div className="navbar">
                <div className="Logo">
                    <img src={logo} alt="" />
                    <h3>My-Tradition</h3>
                </div>
                <div className="CartBoxes">
                    <p>Let's Start</p>
                    <Link to={"user_cart"}>
                    <Bag2 size="32" color="#f5ddb0"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
