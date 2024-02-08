import React from 'react';
import './CompanyDescription.css';
import superpuestaImage from '../img/personal.jpg';

const CompanyDescription = () => {
  return (
    <div className="company-description">
      <div className="image-overlay">
        <img src={superpuestaImage} alt="Superpuesta" />
      </div>
      <div className="content-container">
        <div className="title-container">
          <h2 id="nosotros">Pastelería Dulces Sueños</h2>
        </div>
        <div className="text-container">
          <p id="descripcion-personal">
           Desde 1944,nos dedicamos a brindar experiencias culinarias excepcionales
            con ingredientes de alta calidad. Disfruta de deliciosos desayunos
             y meriendas que cautivan tus sentidos. 
             Nuestra tradición es endulzar tus momentos especiales con sabores que perduran en el tiempo.
              ¡Te invitamos a sumergirte en la dulce tradición de Pastelería Dulces Sueños! 🍰✨
          </p>
        </div>
      </div>
    </div>
  );
};
 
export default CompanyDescription;
