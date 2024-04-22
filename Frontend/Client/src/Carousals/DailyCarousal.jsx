import React, { useState, useEffect } from 'react';
import plazas from "../Assets/Plazas.png"
import printedkurthas from "../Assets/printedKurthas.png"
import suits from "../Assets/Suits.png"
import marchmagics from "../Assets/MarchMagics.png"
import aprilarraivals from "../Assets/AprilArraivals.png"
import summerstyles from "../Assets/SummerStyles.png"
import '../App.css'

function DailyCarousal() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      img1: plazas,
      img2: printedkurthas
    },
    {
      img1: marchmagics, 
      img2: suits

    },
    {
      img1: aprilarraivals,
      img2: summerstyles

    },
    {
      img1: plazas,
      img2: printedkurthas
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="carousel2" >
      
      {slides.map((img,i)=>(
        <div key={i}
        className={`carousel-slide ${i === currentSlide ? 'active' : ''}`}>
        <div className="slides-images">
          <img style={{cursor:"pointer"}} src={img.img1} alt="" />
          <img style={{cursor:"pointer"}} src={img.img2} alt="" />
        </div>
        </div>
      ))}
        
    </div>
  );
}

export default DailyCarousal;
