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

export const ProductoPaginacionSoundex = async (pag) => {
  try {
      console.log("ENTRE A PRODUCTO PAGINACION. PAG SOUNDEX: " + pag)
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

// Define una función que obtenga los detalles del producto por su ID
export const ProductDetails = async (productId) => {
  try {
    console.log("ENTRE A PRODUCTO. id: " + productId)

    // Realiza una solicitud a tu API o base de datos para obtener los detalles del producto
    const response = await axios.get(BASE_URL + `ProductoEspecifico/${productId}`,{
      headers: {
        "Content-Type": "application/json", // Establece el tipo de contenido como JSON
      },
  });      
  const respuesta = new ResponseAPI(response.status, response.data, response.statusText);
  return respuesta;
  
  } catch (error) {
    // En caso de un error en la solicitud, maneja el error adecuadamente
    console.error('Error al obtener detalles del producto:', error);
    throw error; // Puedes lanzar el error nuevamente para que se maneje en el lugar donde se llama a la función
  }
};