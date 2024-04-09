import React, { useState, useEffect } from 'react';
import img3 from "./Assets/Group4.png"
import img2 from "./Assets/Group3.png"
import img4 from "./Assets/Group1.png"
import img1 from "./Assets/Group5.png"
import './App.css'

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      backgroundImage: `url(${img1})`,
    },
    {
      backgroundImage: `url(${img2})`,
      
    },
    {
      backgroundImage: `url(${img3})`,
     
    },
    {
      backgroundImage: `url(${img4})`,
    
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: slide.backgroundImage }}
        >
          <div className="slide-content">
           
       
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
