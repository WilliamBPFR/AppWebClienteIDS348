import React from 'react';
import logo from '@/assets/logo.jpg';
import { LoginUser } from '../../services/usuarioService';
import { useState } from 'react'; // Importa useState desde React
import loguser from '../../Interfaces/Login';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Login = () => {
  // const history = useHistory();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userLoginData = new loguser(userData.email, userData.password);
    console.log(userData);
    try {
      // Llama a la función LoginUser para iniciar sesión
      const response = await LoginUser(userLoginData);

      // Maneja la respuesta de la API aquí (response.data)
      console.log(response.data);
      console.log(response.message);
      navigate('/');
      // history.push('/home');
      return true;
      // Realiza la lógica de redirección o actualización de la interfaz de usuario según la respuesta
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      // Maneja el error, por ejemplo, muestra un mensaje de error al usuario
    }
  };

    return (
      <div className="login-container">
        <img
          className="imagen-compania"
          src={logo}
          alt="Foto de la compañía"
        />
        <div className="form-container">
          <h2>Iniciar Sesión</h2>

          <form method='POST' onSubmit={handleSubmit}>
            <div className="form-group">
              <input onChange={handleInputChange} type="text" id="email" name="email" placeholder="Correo Electrónico" />
            </div>
            <div className="form-group">
              <div className="icon">
                <input onChange={handleInputChange} type="password" id="password" name="password" placeholder="Contraseña" />
              </div>
            </div>
            <button type="submit" className="login-button">Iniciar Sesión</button>
            <a href='/Register'>¿Aún no tienes cuenta?</a>
          </form>
        </div>
      </div>
    );
  };

export default Login;



