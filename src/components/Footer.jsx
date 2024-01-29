import React from 'react';
import './Footer.css'; 
import facebook from '../img/Facebook.png';
import instagram from '../img/Instagram.png';
import whastapp from '../img/WhatsApp.png';

const Footer = () => {
  return (
    <footer>
      <div className="redes-sociales">
        <a href="https://facebook.com" target="_blank" className="icono"><img src={facebook} alt="Facebook" /></a>
        <a href="https://whastapp.com" target="_blank" className="icono"><img src={whastapp} alt="WhatsApp" /></a>
        <a href="https://instagram.com" target="_blank" className="icono"><img src={instagram} alt="Instagram" /></a>
      </div>
      <p>&copy; 2024 Pastelería Dulces Sueños. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
