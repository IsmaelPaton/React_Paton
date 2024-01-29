import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './RegistrationForm.css'; // Asegúrate de importar el archivo CSS correspondiente

const Contacto = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
    message: '',
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ya3qd1o', 'template_4bm87xo', form.current, 'YOstNRyE2a-EFsGdL')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="registration-form">
      <h2>Contacto</h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input type="text" id="apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Haz tu pedido</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
