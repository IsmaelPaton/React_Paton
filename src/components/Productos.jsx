import React, { useState } from 'react';
import './Productos.css';
import croissant from '../img/croissant.jpg';
import magdalenas1 from '../img/magdalenas1.jpg';
import pan1 from '../img/pan1.jpg';
import Magdalenas2 from '../img/Magdalenas2.png';
import Bebidas from '../img/bebidas.jpg';

const Productos = () => {
  const images = [croissant, magdalenas1, pan1, Magdalenas2, Bebidas];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="Dulces">
      <div className="title-and-slider">
        <h2 className="chulo-title">Descubre Nuestras Delicias</h2>
        <div className="Dulces-slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div className="Dulces-slide" key={index}>
              <img src={image} alt={`slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
      <button className="arrow-button" onClick={prevSlide}>
        &#9664;
      </button>
      <button className="arrow-button" onClick={nextSlide}>
        &#9654;
      </button>
    </div>
  );
};

export default Productos;
