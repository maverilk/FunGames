import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.scss';

const NavBar = () => {
  return (
    <div className="header_header">
      <div className="header_logo-container">
        <h1 className="header_logo">FunGames!</h1>
      </div>
      <div className="header_nav-container">
        <nav className="header_nav">
          <ul className="header_nav__list">
            <li className="header_nav__item">
            <Link to="/" className="header_nav__link">Inicio</Link>
            </li>
            <li className="header_nav__item">
              <Link to="/alta" className="header_nav__link">Alta</Link>
            </li>
            <li className="header_nav__item">
              <Link to="/nosotros" className="header_nav__link">Nosotros</Link>
            </li>
            <li className="header_nav__item">
              <Link to="/contacto" className="header_nav__link">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;


