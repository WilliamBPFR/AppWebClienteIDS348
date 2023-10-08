// Loginn.js

import React from 'react';
import './Login.css';
import ImagenTienda from './ImagenTienda.jpg';

const Loginn = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img
          className="imagen-Logo"
          src={ImagenTienda}
          alt="foto-Logo"
        />
      </div>
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        
        <form action="#" method="post">
          <div className="form-group">
            <input type="text" id="email" name="email" placeholder="Correo Electrónico" />
          </div>
          <div className="form-group">
            <div className="icon">
              <input type="password" id="password" name="password" placeholder="Contraseña" />
            </div>
          </div>
          <button type="submit" className="login-button">Iniciar Sesión</button>
          <a href='#'>¿Aún no tienes cuenta?</a>
        </form>
      </div>
    </div>
  );
};

export default Loginn;
