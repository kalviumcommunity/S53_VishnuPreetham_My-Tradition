import React, { useContext, useState, useEffect } from 'react';
import "./states.css";
import statesdata from "./statesdata.json";
import productdata from "./Productdata.json"
import { Link } from 'react-router-dom';
import { AppContext } from '../../Context/ParentContext';

const States = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { newdata, setNewData } = useContext(AppContext);
    const setdata = (statename) => {
        const settingdata = productdata.states[statename];
        setNewData(settingdata);
        console.log(settingdata);
    }
    const exploreHover = (index) => {
        setHoveredIndex(index);
    }

    const exploreLeave = () => {
        setHoveredIndex(null);
    }

    return (
        <div>
            <div className="bcimg">
                <h1>Make your event more colorful with your tradition</h1>
            </div>
            <div className="quote" style={{ textAlign: "center" }}>
                <h1>Making your tradition rich with the state</h1>
            </div>
            <div className="cards-container-div">
                {statesdata.map((item, index) => (
                    <div
                        className="carddiv"
                        onMouseEnter={() => exploreHover(index)}
                        onMouseLeave={exploreLeave}
                        key={index}
                        style={{
                            backgroundImage: `url(${item.image_url})`,
                        }}
                    >
                        {hoveredIndex === index && (
                            <Link to='products'>
                            <div className="explorebutton" onClick={() => { setdata(item.state) }}>
                                <h3>Explore</h3>
                                <img width={"20px"} src="https://cdn-icons-png.flaticon.com/128/54/54366.png" alt="" />
                            </div>
                           </Link>
                        )}
                        <h4>{item.state}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default States;
