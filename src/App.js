import React, { useState } from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import Footer from './components/Footer';
import CompanyDescription from './components/CompanyDescription';
import principal from './img/fondo2.png';
import Contacto from './components/Contacto';
import './App.css';
import Preloader from './components/Preloader';

const App = () => {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <div className="app-container">
      <Preloader onFinishLoading={() => setLoadingFinished(true)} />

      {!loadingFinished && (
        <div className="preloader-background">
          <p>Cargando...</p>
        </div>
      )}

      {loadingFinished && (
        < >
          
          <Header />

          <div className="fondo-container">
            <img src={principal} className="fondo2" alt="Fondo" />
            <div className="horario-text">
              <p className="chulo-parrafo fadeInParagraphs">Pastelería Dulces Sueños </p>
              <p className="chulo-parrafo fadeInParagraphs">¡Ven y despierta tus sentidos!</p>
              <p className="fadeInParagraphs">Horario de Apertura:</p>
              <p className="fadeInParagraphs">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="fadeInParagraphs">Sábados y Domingos: 10:00 - 16:00 </p>
            </div>
          </div>

          <div id="productos" className="main-content">
            <Productos />
          </div>

          <div id="nosotros" className="main-content">
            <CompanyDescription />
          </div>

          <div className="content-container">
            <div id="registrate" className="main-content form-container">
              <Contacto />
            </div>

            <div id="donde-estamos" className="main-content map-container">
              <div className="map-frame">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23222.12386903514!2d-8.384400099999999!3d43.319168499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e64bac6d89ae3%3A0xa311b9a1cdb30934!2sPasteler%C3%ADa%20Dulces%20Sue%C3%B1os!5e0!3m2!1ses!2ses!4v1704999829336!5m2!1ses!2ses"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
};
export default App;