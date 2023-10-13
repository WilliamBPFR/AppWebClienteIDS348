import React, { useState, useEffect } from 'react';
import foto1 from '@/assets/foto1.jpg';
import Filter from '../components/filter/Filter';
import Pagination from '../components/Pagination';
import { ProductoPaginacion } from "@/services/productoService";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0); // Estado para mantener el número de página actual

  useEffect(() => {
    async function fetchProductos(page) {
      try {
        console.log("ENTRE USEFECT PRODUCTOOOO");
        const response = await ProductoPaginacion(page + 1);
        const productosData = response.data.value; // Asume que la respuesta contiene una lista de productos
        console.log(productosData);
        setProductos(productosData);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    }
    fetchProductos(currentPage); // Llama a la función con la página actual
  }, [currentPage]);

  const handlePageChange = (page) => {
    console.log("ENTRE HANDLEPAGECHANGE");
    console.log("Primero: "+ page);
    setCurrentPage(page); // Actualiza el estado de la página actual
  };

  return (
    <div>
      <div className="flex">
        <div className="col-span-3 cont-prods">
          <Filter />
        </div>
        <div className="col-span-9 ">
          <div className="flex flex-wrap justify-center">
            {productos.map((producto, index) => (
              <div key={producto.id} className="m-2 p-4 contenedor-producto card col-span-4">
                <img
                  className="imagen-producto"
                  src={foto1}
                  alt={producto.fotos[0]}
                />

                <div className="info-producto">
                  <p className="titulo">{producto.nombre}</p>
                  <p className="descripcion">{producto.descripcion}</p>
                  <p className="precio">{producto.precio}</p>
                  <a href={`/product/${producto.id}`}> {/* Ajusta la URL según tu estructura */}
                    <button className="login-button">Ver más</button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Pagination 
        onPageChange = {handlePageChange}
        />
      </div>
    </div>
  );
}

export default Home;
