import React, { useState, useEffect } from 'react';
import './Productos.css';
import croissant from '../img/croissant.jpg';
import magdalenas1 from '../img/magdalenas1.jpg';
import pan1 from '../img/pan1.jpg';
import Magdalenas2 from '../img/Magdalenas2.png';
import Bebidas from '../img/bebidas.jpg';

const Productos = () => {
  const images = [croissant, magdalenas1, pan1, Magdalenas2, Bebidas];
  const [currentSlide, setCurrentSlide] = useState(0);
  

  const selectSlide = (index) => {
    setCurrentSlide(index);
  };

  const productDescriptions = [
    "Deliciosos croissants recién horneados.",
    "Esponjosas magdalenas que te encantarán.",
    "Variedad de panes frescos y deliciosos.",
    "Exquisitos pasteles para endulzar tu día.",
    "Aromáticos y sabrosos cafés para disfrutar."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 4000);

    
    return () => clearInterval(interval);
  }, []); 
  return (
    <div className="DulcesGrid">
      <div className="Dulces-slider">
        <img src={images[currentSlide]} alt={`slide ${currentSlide + 1}`} />
        
      </div>
      <div className="product-description">
        <h2>{productDescriptions[currentSlide]}</h2>
      </div>
      <div className="button-container">
        {images.map((_, index) => (
          <button key={index} className={`round-button ${currentSlide === index ? 'active' : ''}`} onClick={() => selectSlide(index)}>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Productos;
