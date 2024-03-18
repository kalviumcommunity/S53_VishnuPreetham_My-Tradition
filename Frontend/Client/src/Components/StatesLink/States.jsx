import React, { useState } from 'react';
import "./states.css";
import statesdata from "./statesdata.json";

const States = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
                            <div className="explorebutton">
                                <h3>Explore</h3>
                                <img width={"20px"} src="https://cdn-icons-png.flaticon.com/128/54/54366.png" alt="" />
                            </div>
                        )}
                        <h4>{item.state}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default States;
