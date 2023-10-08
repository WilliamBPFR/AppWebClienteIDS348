// Registro.js

import React from 'react';
import './Registro.css';
import ImagenCompania from '../Login/imagenTienda.jpg';

const Registro = () => {
  return (
    <div className="registro-container">
      <img
        className="imagen-compania"
        src={ImagenCompania}
        alt="Foto de la compañía"
      />
      <h2>Registrar</h2>
      <form action="#" method="post">
        <div className="form-group">
          <label htmlFor="nombres">Nombre</label>
          <input type="text" id="nombres" name="nombres" placeholder="Nombres" />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            placeholder="Apellidos"
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="text"
            id="correo"
            name="correo"
            placeholder="Correo Electrónico"
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            id="fechaNacimiento"
            name="fechaNacimiento"
            placeholder="Fecha de Nacimiento"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            placeholder="Contraseña"
          />
        </div>
        <div className="form-group">
          <label htmlFor="repetirContrasena">Repetir Contraseña</label>
          <input
            type="password"
            id="repetirContrasena"
            name="repetirContrasena"
            placeholder="Repetir Contraseña"
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            placeholder="Dirección"
          />
        </div>
        <button type="submit" className="registro-button">
          Registrarse
        </button>
        <p className="login-link">
          ¿Ya tienes una cuenta? <a href="#">Iniciar Sesión</a>
        </p>
      </form>
    </div>
  );
};

export default Registro;
