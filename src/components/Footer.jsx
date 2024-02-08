import React from 'react';
import './Footer.css'; 
import facebook from '../img/Facebook.png';
import instagram from '../img/Instagram.png';
import whatsapp from '../img/WhatsApp.png';
import logo from '../img/logofooter.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="company-info">
          <img src={logo} alt="Logo de Pastelería Dulces Sueños" className="company-logo" />
          <div>
            <p className="company-name">Pastelería Dulces Sueños</p>
            </div>
            <div id='copyright'>
            <p className="copyright">&copy; 2024. Pasteleria Dulces Sueños. Todos los derechos reservados.</p>
          </div>
        </div>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" className="icono"><img src={facebook} alt="Facebook" /></a>
          <a href="https://whatsapp.com" target="_blank" className="icono"><img src={whatsapp} alt="WhatsApp" /></a>
          <a href="https://instagram.com" target="_blank" className="icono"><img src={instagram} alt="Instagram" /></a>
        </div>
        <div className="legal-info">
          <p><a href="#pol_privacidad">Política de Privacidad</a></p>
          <p><a href="#pol_cookies">Política de Cookies</a></p>
          <p><a href="#aviso_legal">Aviso Legal</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
