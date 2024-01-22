import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setClick(false);
    }
  };

  return (
    <div className="header">
      <div className="container">
        <h1 className="Text-nav">Welcome 💻</h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="#" onClick={() => scrollToSection('home')}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => scrollToSection('about')}>
              Sobre Mi
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => scrollToSection('services')}>
              Servicios
            </a>
          </li>
          <li>
            <a href="#portfolio" onClick={() => scrollToSection('portfolio')}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              Contacto
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#333333' }} />
          ) : (
            <FaBars size={20} style={{ color: '#333333' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;