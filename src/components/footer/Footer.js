import React from 'react';
import flogo from '../cards/img/f-g.png';
import twitter from '../cards/img/twitter.png';
import facebook from '../cards/img/facebook.png';
import instagram from '../cards/img/instagram.png';
import '../../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer__logo" src={flogo} alt="Logo" /> 
      <nav className="footer__nav">
        <ul className="footer__nav-list">
          <li className="footer__nav-item"><a href="#" className="footer__nav-link">Contacto</a></li>
        </ul>
      </nav>
      <div className="footer__social">
        <img className="SocialImage" src={facebook} alt="Facebook" /> 
        <a href="https://www.facebook.com/FunGames" className="footer__social-link">Facebook</a>
        <img className="SocialImage" src={twitter} alt="Twitter" /> 
        <a href="https://twitter.com/FunGames" className="footer__social-link">Twitter</a>
        <img className="SocialImage" src={instagram} alt="Instagram" /> 
        <a href="https://www.instagram.com/FunGames" className="footer__social-link">Instagram</a>
      </div>
      <p className="footer__copy">&copy; 2023 FunGames! Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;

