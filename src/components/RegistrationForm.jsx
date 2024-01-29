import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  // Estados para almacenar los valores de los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
   
  });

  // Estados para manejar la validación de los campos
  const [errors, setErrors] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    email: '',
   
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para validar los campos
  const handleValidation = () => {
    // Implementa la lógica de validación según tus necesidades
    // Por ahora, simplemente verificamos si los campos no están vacíos
    let isValid = true;
    const newErrors = { ...errors };

    for (const field in formData) {
      if (formData[field].trim() === '') {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} es obligatorio`;
        isValid = false;
      } else {
        newErrors[field] = '';
      }
    }
    return isValid;
  };

  // Función para manejar el envío del formulario con validación
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      console.log('Formulario enviado:', formData);
      // Agrega la lógica para enviar el formulario al servidor aquí
    } else {
      console.log('Formulario con errores. Por favor, verifica los campos.');
    }
  };

  
  return (
    <div className="registration-form">
      <h2>Contacto</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Nombre */}
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            onBlur={handleValidation}
            placeholder="Ingrese su nombre"
            required
          />
          <span className="error-message">{errors.nombre}</span>
        </div>

        {/* Apellidos */}
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos:</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            onBlur={handleValidation}
            placeholder="Ingrese sus apellidos"
            required
          />
          <span className="error-message">{errors.apellidos}</span>
        </div>

        {/* Teléfono */}
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            onBlur={handleValidation}
            placeholder="Ingrese su número de teléfono"
            required
          />
          <span className="error-message">{errors.telefono}</span>
        </div>

        {/* Correo Electrónico */}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleValidation}
            placeholder="Ingrese su correo electrónico"
            required
          />
          <span className="error-message">{errors.email}</span>
        </div>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};



export default RegistrationForm;
