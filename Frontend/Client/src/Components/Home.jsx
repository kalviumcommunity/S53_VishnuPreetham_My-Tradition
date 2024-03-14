import React from 'react'
import "./Home.css"
import data from "./data.json"

const Home = () => {
    return (
        <div>
            <div className='body'>
                <h1> Celebrate the fest With  Your tradition. </h1>
                <button>Shop Now</button>
            </div>
            <div>
                <div className="BodyFooter">
                    <h1>Adding new Collections To your Traditions</h1>
                </div>
                <div className="cards-container">
                    {data.map((item, index) => (
                        <div className="card" key={index}>
                            <img className='saree-image' src={item.image_url} alt="" />
                            <h4>{item.description}</h4>
                            <div className="explore">
                                <h4>Explore</h4>
                                <img width={"20px"} src="https://cdn-icons-png.flaticon.com/128/54/54366.png" alt="" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Home
