import React, { useContext, useState } from 'react'
import "./Home.css"
import Addimg from "../../Assets/Group6.png"
import data from "../Data/data.json"
import categoryData from "../Data/catagory.json"
import offer from "../Data/offer.json"
import moderndata from "../Data/HomeProducts.json"
import Practice from '../../Carousals/HomeCarousal';
import DailyCarousal from '../../Carousals/DailyCarousal'
import Navbar from './Navbar'
import Footer from './Footer'
import Signup from '../../FireBaseLogin/Signup'
import { AppContext } from '../../Context/ParentContext'
import Signin from '../../FireBaseLogin/Signin'
import { CloseSquare } from 'iconsax-react'
const Home = () => {
    const {open,isexist,signin} = useContext(AppContext);
    const [block,setBlock]=useState(true)
    
    const Open=()=>{

    }
    return (
        <div>
            <Navbar />

            <Practice />

            <div className="mid_home">
                <p>Trendy Marriage Collections</p>
            </div>
            <div className="Mid_home_products">
                {data.map((product, index) => (
                    <div className="card" key={index}>
                        <img src={product.image || product.image_url} alt={product.description} />
                        <div className="card-description">{product.description}</div>
                    </div>
                ))}
            </div>
            <div className="newArrivals">

                <p>New Arrivals</p>
            </div>
            <DailyCarousal />
            <div className='Products_persons'>
                <p>Modern Magics</p>
            </div>
            <div className="Modern_Products">
                {moderndata.map((e, i) => (
                    <>
                        <div className="Products">
                            <img src={e.img} alt="" />
                            <div className="Overlay">
                                <p className="MPDescription">{e.description}</p>
                                <p className="MPDiscount">{e.discount}</p>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    </>
                ))}
            </div>
<Footer/>

 {open && <div className="userloginbox" style={{

 }}> {open && !isexist && <Signup/>} {isexist  &&  <Signin/>}</div>}


        </div>
    )
}

export default Home
