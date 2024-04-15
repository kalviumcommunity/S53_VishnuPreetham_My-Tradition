import React from 'react'
import "./Home.css"
import Addimg from "../../Assets/Group6.png"
import data from "../Data/data.json"
import cataforydata from "../Data/catagory.json"
import offer from "../Data/offer.json"
import moderndata from "../Data/HomeProducts.json"
import  Practice  from '../../Carousals/HomeCarousal';
import DailyCarousal from '../../Carousals/DailyCarousal'
import Navbar from './Navbar'
const Home = () => {
    return (
        <div>
      <Navbar/>

            <Practice/>
           
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
            
            <div className='Products_persons'>
                <p>Our Trends</p>
            </div>
            <div className="products_catagory">
                {cataforydata.map((e, i) => (
                    <>
                        <div className="cat_prod">
                            <img src={e.image} alt="" />
                            <p className="categoryText">{e.catagory}</p>
                        </div>
                    </>
                ))}
            </div>
            <div className="Add" >

            </div>
            <div className="newArrivals">

            <p>New Arrivals</p>
            </div>
            <DailyCarousal/>
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

        </div>
    )
}

export default Home
