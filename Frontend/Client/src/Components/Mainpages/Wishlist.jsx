import React from 'react'
import Navbar from './Navbar'
import { useContext } from 'react'
import { AppContext } from '../../Context/ParentContext'
const Wishlist = () => {
    const { signin } = useContext(AppContext)
    return (
        <div>
            <Navbar />
            <div className="check" style={{
                marginTop: "25vh",
                display: signin ? "none" : "block"
            }}>
                Please Do login .
            </div>
        </div>

    )
}

export default Wishlist
