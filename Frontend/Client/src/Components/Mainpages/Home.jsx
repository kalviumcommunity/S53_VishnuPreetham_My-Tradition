import React from 'react'
import "./Home.css"
import topLogo from "./Sareeiewithoutbackground.png"
import botoomLogo from "./Advertisement2.png"
const Home = () => {
    return (
        <div>
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
            {/* <div className='body'>
                <h1> Celebrate the fest With  Your tradition. </h1>
               <Link to={"states"}> <button>Shop Now</button></Link>
            </div>
            <div>
                <div className="BodyFooter">
                    <h1>Adding new Collections To your Traditions</h1>
                </div>
            </div> */}
        </div>
    )
}

export default Home
