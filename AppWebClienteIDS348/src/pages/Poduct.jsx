import React, { useState, useEffect } from 'react';
import { ProductDetails } from '@/services/productoService'; // Asegúrate de importar la función desde el archivo correcto


const Product = () => {
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const currentURL = window.location.pathname;
    const urlParts = currentURL.split('/');
    const productId = urlParts[urlParts.length - 1];

    const fetchProductDetails = async () => {
      try {
        const data = await ProductDetails(productId);
        setProductData(data);
      } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };

    fetchProductDetails();
  }, []);


  if (!productData) {
    // Puedes mostrar un indicador de carga aquí si los datos aún no se han cargado
    return <div>Cargando...</div>;
  }

  // Una vez que los datos estén disponibles, puedes renderizar tu componente Product con los datos
  return (
   
      <div className="flex items-center mt-10 ml-10 pl-20">
      <div>
      <ProductPhotos />
      </div>
      <div className="ml-20 mt-50">
        <h1 className="text-6xl">{productData.nombre}</h1>
        <div className="border-b border-gray-300 pb-2 mb-4">
      {/* Esta es la línea debajo del nombre del producto */}
      </div>
        <p className="text-3xl text-green-500">{productData.availability}</p>
        <p className="text-2xl">Precio:</p>
        <p className="text-2xl text-red-500">$/ {productData.precio}</p>
        <div class="flex flex-row">
        <div class="basis-1/4">
        </div>
        <p className="text-2xl">Tamaño: </p>
        </div>
        <p className="text-2xl text-red-500">$/ {productData.nombreEstadoProductos}</p>

        <div className='basis-1/4 mx-2' >
        <p className="text-2xl">Color: </p> 
        <div className="w-6 h-6 rounded-full border border-black" style={{ backgroundColor: "#000000" }}></div>
        </div>

        <p className="text-2xl">{productData.descripcion}</p>
        <div  className="border border-gray-300 p-4 rounded">
          <p>{productData.Size}</p>
        </div>
      
      <label className="text-2xl ">Cantidad:</label>
      <input className="border border-gray-300 rounded w-20 h-10 ml-2"
        type="number"
      />

      <div  className="flex justify-center mt-10">
          <button className="login-button m-4">Comprar ahora</button>
          <button className="login-button-claro m-4">Agregar al carrito</button>
      </div>
      </div>
      </div>
  );
};



  export default Product;
    
 