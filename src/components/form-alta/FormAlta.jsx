import React, { useState, useRef } from 'react';
import '../../styles/FormAlta.scss';

function FormAlta() {
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');
  const mensajeErrorRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    let requiredFieldsEmpty = false;
    form.querySelectorAll('[required]').forEach((input) => {
      if (!input.value) {
        requiredFieldsEmpty = true;
      }
    });

    if (requiredFieldsEmpty) {
      setMensajeError('Por favor, complete todos los campos requeridos.');
      setMensajeExito('');
      mensajeErrorRef.current.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setMensajeExito('¡Su registro se completó con éxito!');
    setMensajeError('');

    for (const [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }
  };

  return (
    <div>
      {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}
      {mensajeError && (
        <div className="mensaje-error" ref={mensajeErrorRef}>
          {mensajeError}
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="box">
          <h2 className="form__title">Formulario de Alta</h2>

          <div className="form__field">
            <label htmlFor="name" className="form__label">Nombre:</label>
            <input type="text" id="name" name="name" className="form__input" required />
          </div>
          <div className="form__field">
            <label htmlFor="lastname" className="form__label">Apellido:</label>
            <input type="text" id="lastname" name="lastname" className="form__input" required />
          </div>
          <div className="form__field">
            <label htmlFor="email" className="form__label">Correo electrónico:</label>
            <input type="email" id="email" name="email" className="form__input" required />
          </div>
          <div className="form__field">
            <label htmlFor="phone" className="form__label">Teléfono:</label>
            <input type="tel" id="phone" name="phone" className="form__input" pattern="[0-9]{10}" />
            <small className="form__note">Incluir solo números (10 dígitos).</small>
          </div>
          <div className="form__field">
            <label htmlFor="birthdate" className="form__label">Fecha de Nacimiento:</label>
            <input type="date" id="birthdate" name="birthdate" className="form__input" max="2005-01-01" />
          </div>
          <div className="form__field">
            <label htmlFor="gender" className="form__label">Género:</label>
            <select id="gender" name="gender" className="form__select">
              <option value="">Seleccione</option>
              <option value="male">Masculino</option>
              <option value="female">Femenino</option>
              <option value="other">Otro</option>
            </select>
          </div>
          <div className="form__field">
            <label htmlFor="address" className="form__label">Dirección:</label>
            <input id="address" name="address" className="form__input" />
          </div>
          <div className="form__field">
            <label htmlFor="city" className="form__label">Ciudad:</label>
            <input type="text" id="city" name="city" className="form__input" />
          </div>
          <div className="form__field">
            <label htmlFor="country" className="form__label">País:</label>
            <input type="text" id="country" name="country" className="form__input" />
          </div>
          <div className="form__field">
            <label htmlFor="avatar" className="form__label">Avatar:</label>
            <input type="file" id="avatar" name="avatar" className="form__file" accept="image/png, image/jpeg" />
          </div>
          <div className="form__field">
            <label htmlFor="accept-terms" className="form__label">
              <input type="checkbox" id="accept-terms" name="accept-terms" className="form__checkbox" required />
              Aceptar términos y condiciones
            </label>
          </div>
          <button type="submit" className="form__submit">Registrar</button>
        </div>
      </form>
    </div>
  );
}

export default FormAlta;
