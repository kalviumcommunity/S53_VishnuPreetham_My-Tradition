import React, { useState, useEffect } from 'react';

import img2 from "../Assets/NewArr4.png"
import img4 from "../Assets/NewArr3.png"
import img1 from "../Assets/NewArr1.png"
import img5 from "../Assets/NewArr2.png"
import '../App.css'

function DailyCarousal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      backgroundImage: `url(${img1})`,
    },
    {
      backgroundImage: `url(${img2})`,
      
    },
    {
      backgroundImage: `url(${img4})`,
      
    },
   { backgroundImage: `url(${img5})`,}
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel2">
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

export default DailyCarousal;
