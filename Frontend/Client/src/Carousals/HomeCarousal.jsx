import React, { useState, useEffect } from 'react';
import img3 from "../Assets/Group4.png"
import img2 from "../Assets/Group3.png"
import img4 from "../Assets/Group1.png"
import img1 from "../Assets/Group5.png"
import img5 from "../Assets/Group7.png"
import group9 from "../Assets/NewArr1.png"
import '../App.css'

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { backgroundImage: `url(${img1})` },
    { backgroundImage: `url(${img2})` },
    { backgroundImage: `url(${img3})` },
    { backgroundImage: `url(${img4})` },
    { backgroundImage: `url(${img5})` },
    { backgroundImage: `url(${group9})` }
  ];

  const Nextsilde = () => {
    setCurrentSlide((PreviousSilde) => (PreviousSilde + 1) % slides.length);
  };

  const PreviousSilde = () => {
    setCurrentSlide((PreviousSilde) => (PreviousSilde - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(Nextsilde, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: slide.backgroundImage }}
        />
      ))}
      <button className="carousel-control prev" onClick={PreviousSilde}>
        &#10094;
      </button>
      <button className="carousel-control next" onClick={Nextsilde}>
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
}

export default Carousel;