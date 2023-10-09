import React from 'react';
import logo from '@/assets/logo.jpg'; 


const Login = () => {
    return (
      <div className="login-container">
        <img
          className="imagen-compania"
          src={logo}
          alt="Foto de la compañía"
        />
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
            <a href='/Register'>¿Aún no tienes cuenta?</a>
          </form>
        </div>
      </div>
    );
  };

export default Login



