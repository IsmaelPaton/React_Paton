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
  const [enviado, setEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ya3qd1o', 'template_4bm87xo', form.current, 'YOstNRyE2a-EFsGdL')
      .then(
        (result) => {
          console.log(result.text);
          setEnviado(true);
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
      {enviado ? (
        <div className="mensaje-enviado">
          <h2>¡Mensaje enviado correctamente!</h2>
          <p>Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.</p>
        </div>
      ) : (
        <form ref={form} onSubmit={sendEmail}>
          <h2>Contacto</h2>
          <div className="form-group">
            <label htmlFor="nombre">Nombre y Apellidos:</label>
            <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
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
      )}
    </div>
  );
};

export default Contacto;
