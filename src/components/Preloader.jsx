

import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onFinishLoading }) => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Oculta el preloader después de 2 segundos (2000 milisegundos)
    const timeout = setTimeout(() => {
      setShowPreloader(false);
      onFinishLoading(); // Llama a la función proporcionada cuando termina la carga
    }, 2000);

    // Limpia el temporizador en la limpieza del efecto para evitar problemas
    return () => clearTimeout(timeout);
  }, [onFinishLoading]);

  return (
    showPreloader && (
      <div id="preloader">
        <div id="loader"></div>
      </div>
    )
  );
};

export default Preloader;
