import axios from "axios";
import ResponseAPI from "../Interfaces/response";
import Login from "../Interfaces/Login";

const BASE_URL = 'http://localhost:5249/api/Cliente/';

export const LoginUser = async (log) => {
    try {
        const response = await axios.post(BASE_URL + "LoginUsuario", log, {
            headers: {
              "Content-Type": "application/json", // Establece el tipo de contenido como JSON
            },
        });      
        const respuesta = new ResponseAPI(response.status, response.data, response.statusText);
      return respuesta;
    } catch (error) {
      console.error('Error en getUsers:', error);
      throw error;
    }
  };
