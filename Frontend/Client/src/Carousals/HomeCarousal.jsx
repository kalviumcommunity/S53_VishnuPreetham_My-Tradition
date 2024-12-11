import React, { useState, useEffect } from 'react';
import img3 from "../Assets/Group4.png";
import img2 from "../Assets/Group3.png";
import img4 from "../Assets/Group1.png";
import img1 from "../Assets/Group5.png";
import img5 from "../Assets/Group7.png";
import group9 from "../Assets/NewArr1.png";
import '../App.css';
import { useNavigate } from 'react-router-dom';
import cookies from "js-cookie";


const Carousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { backgroundImage: `url(${img1})`, Navigation: () => navigate("/LaunchingSoon") },
    { backgroundImage: `url(${img2})`, Navigation: () => navigate("/LaunchingSoon") },
    { backgroundImage: `url(${img3})`, Navigation: () => navigate("/LaunchingSoon") },
    { backgroundImage: `url(${img4})`, Navigation: () => navigate("/LaunchingSoon") },
    { backgroundImage: `url(${img5})`, Navigation: () => navigate("/LaunchingSoon") },
    { 
      backgroundImage: `url(${group9})`, 
      Navigation: () => {
        const latestModel = cookies.get("model"); 
        navigate(`products_page?Category=saree&Model=${latestModel}`);
      }
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 2500); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          onClick={slide.Navigation}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: slide.backgroundImage }}
        />
      ))}
      <button 
        className="carousel-control prev" 
        onClick={previousSlide} 
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button 
        className="carousel-control next" 
        onClick={nextSlide} 
        aria-label="Next Slide"
      >
        &#10095;
      </button>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
