import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="fixed-navbar">
      <div className="navbar-container">
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#donde-estamos">¿Dónde estamos?</a></li>
          <li><a href="#registrate">Regístrate</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
