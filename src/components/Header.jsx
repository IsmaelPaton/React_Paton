import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import './Header.css';
import principal from './logo.png';

const Header = () => {
  const [showNavbarLogo, setShowNavbarLogo] = useState(false);
  const logoRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const logoElement = logoRef.current;
      if (logoElement) {
        const logoPosition = logoElement.getBoundingClientRect().top;
        setShowNavbarLogo(logoPosition <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header>
      <div
        className={`logo-container ${showNavbarLogo ? 'logo-in-navbar' : ''}`}
        id="logo"
        ref={logoRef}
        onClick={handleLogoClick}
      >
        <img src={principal} alt="Logo Pastelería" />
      </div>

      <Navbar showNavbarLogo={showNavbarLogo} />
    </header>
  );
};

export default Header;
