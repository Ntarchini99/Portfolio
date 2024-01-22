import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, animateScroll as scroll } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="container">
        <h1 className="Text-nav">Welcome <span className='hi'>🖐️</span></h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={handleClick}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={handleClick}>
              Sobre Mi
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} onClick={handleClick}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500} onClick={handleClick}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
              Contacto
            </Link>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#fff' }} />
          ) : (
            <FaBars size={20} style={{ color: '#fff' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
