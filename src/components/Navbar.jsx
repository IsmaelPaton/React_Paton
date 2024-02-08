import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoNavbar from '../img/logonavbar.png';

const Navbar = ({ showNavbarLogo }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsActive(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className={`fixed-navbar ${isActive ? 'show' : ''}`}>
      <div className="navbar-container">
        <div id='logonavbar'>
          {showNavbarLogo && <img src={logoNavbar} alt="Navbar Logo" className="navbar-logo" />}
        </div>
        <ul>
          <li><button onClick={() => handleNavClick('inicio')} className="nav-button">Inicio</button></li>
          <li><button onClick={() => handleNavClick('productos')} className="nav-button">Productos</button></li>
          <li><button onClick={() => handleNavClick('nosotros')} className="nav-button">Nosotros</button></li>
          <li><button onClick={() => handleNavClick('donde-estamos')} className="nav-button">¿Dónde estamos?</button></li>
          <li><button onClick={() => handleNavClick('registrate')} className="nav-button">Contacto</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
