import React from 'react';
import '../../styles/contacto.scss'; 
import contactImage from '../cards/img/Respuesta-al-cliente.webp'; 

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <img src={contactImage} alt="Contacto" className="contact-image" />
      </div>
      <div className="contact-form-container">
        <h1 className="contact-heading">Formulario de Contacto</h1>
        <form action="#" method="POST" className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="nombre" className="contact-form-label">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required className="contact-form-input" />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email" className="contact-form-label">Email:</label>
            <input type="email" id="email" name="email" required className="contact-form-input" />
          </div>

          <div className="contact-form-group">
            <label htmlFor="mensaje" className="contact-form-label">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" required className="contact-form-textarea"></textarea>
          </div>

          <div className="contact-form-group">
            <input type="submit" value="Enviar" className="contact-form-submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
