import React from 'react'
import "./Home.css"
import topLogo from "./Sareeiewithoutbackground.png"
import botoomLogo from "./Advertisement2.png"
import img2 from "./img2.jpg"
import { Link } from "react-router-dom";
import data from "../Data/data.json"
import cataforydata from "../Data/catagory.json"
import offer from "../Data/offer.json"
import moderndata from "../Data/HomeProducts.json"
const Home = () => {
    return (
        <div>

            <div className='body' style={{
                backgroundImage: `url(${img2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top",
                // width: "100%",   
                height: "100vh",
                position: "relative",
                top: "5px"
            }}>
                <h1> Celebrate the fest With  Your tradition. </h1>
                <Link to={"states"}> <button>Shop Now</button></Link>
            </div>


            <div>

            </div>
            <div className="advertismentcards">
                <div className="advertisementcard1">
                    <div className="para">
                        <p className='p1'>
                            WORRIED ABOUT PURE PATTU ,LET'S CELEBRATE THE FEST WITH KANCHIPATTU.
                        </p>
                        <p className='p2'>Adorn yourself in the unique weaving technique of Kanchipattu sarees. Crafted with pure mulberry silk and fine zari threads, they’re a blend of tradition and sustainable style. <strong>Nita Ambani approves – will you?</strong></p>
                        <button>
                            Let's Culturify
                        </button>
                    </div>
                    <img src={topLogo} alt="Addvertisement Logo" />
                </div>
                <div className="advertisementcard2">
                    <img src={botoomLogo} alt="Addvertisement Logo" />
                    <div className="parabottom">
                        <p className='p1bottom'>
                            BOTHERING ABOUT BANARAS,HERE IS BEST BANARAS FOR YOU
                        </p>
                        <p className='p2bottom'>"Elegance woven into every thread. Experience timeless beauty with Banaras sarees. Embrace tradition, exude sophistication."</p>
                        <button>
                            Let's Beautify
                        </button>
                    </div>
                </div>
            </div>
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
            <div className="mid_advirtisement">
                <p>Cool Offers Cult Discounts </p>
            </div>
            <div className="prod_advertisement">
                {offer.map((e, i) => (
                    <>
                        <div className="adv_prod">
                            <img src={e.image} alt="" />
                            <div className='Catagory'><img src={e.brandimg} alt="" />{e.catagory} </div>
                            <p className='Discount'>{e.Discount}</p>
                        </div></>
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
