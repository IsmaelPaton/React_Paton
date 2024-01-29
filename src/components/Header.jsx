import React, { useEffect } from 'react';
import Navbar from './Navbar';
import './Header.css'; 
import principal from './logo.png';

const Header = () => {
  useEffect(() => {
    // Agregar la clase al elemento del logo al cargar la página
    const logoElement = document.getElementById('logo');
    if (logoElement) {
      logoElement.classList.add('rotate-on-load');
    }
  }, []);

  return (
    <header>
      <div className="logo-container" id="logo">
        <img src={principal} alt="Logo Pastelería" />
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
