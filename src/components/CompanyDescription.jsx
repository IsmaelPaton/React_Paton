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
          <h2 id="nosotros">Pasteleria fundada en 1924</h2>
        </div>
        <div className="text-container">
          <p id="descripcion-personal">
          ¡Bienvenido a Pastelería Dulces Sueños! Desde 1924,
           nos enorgullece ofrecer las mejores experiencias
            culinarias con ingredientes de alta calidad.
             Disfruta de exquisitos desayunos y meriendas que deleitan
              tus sentidos. Nuestra tradición es endulzar tus momentos
               especiales con sabores que perduran en el tiempo.
                ¡Te invitamos a disfrutar de la magia de Pastelería Dulces Sueños!
          </p>
        </div>
      </div>
    </div>
  );
};
 
export default CompanyDescription;
