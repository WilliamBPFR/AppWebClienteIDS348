import axios from "axios";
import ResponseAPI from "../Interfaces/response";
import Login from "../Interfaces/Login";

const BASE_URL = 'http://localhost:5249/api/Product/';

export const ProductoPaginacion = async (pag) => {
    try {
        console.log("ENTRE A PRODUCTO PAGINACION. PAG: " + pag)
        const response = await axios.get(BASE_URL + `ProductosPaginacion/${pag}`,{
            headers: {
              "Content-Type": "application/json", // Establece el tipo de contenido como JSON
            },
        });      
        const respuesta = new ResponseAPI(response.status, response.data, response.statusText);
        return respuesta;
    } catch (error) {
      console.error('Error en productoPaginacion:', error);
      throw error;
    }
};


export const totalProductos = async () => {
  try {
      const response = await axios.get(BASE_URL + "CantidadProductos", {
          headers: {
            "Content-Type": "application/json", // Establece el tipo de contenido como JSON
          },
      });      
      const respuesta = new ResponseAPI(response.status, response.data, response.statusText);
    return respuesta;
  } catch (error) {
    console.error('Error en productoPaginacion:', error);
    throw error;
  }
}