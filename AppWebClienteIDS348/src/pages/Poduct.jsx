import React, { useState, useEffect } from 'react';
import { ProductDetails } from '@/services/productoService'; // Asegúrate de importar la función desde el archivo correcto
import { useLocation } from 'react-router-dom';
import ProductPhotos from '@/components/ProductPhotos';



const Product = () => {

  const location = useLocation(); // Utiliza useLocation para obtener la ubicación actual
  const idParam = new URLSearchParams(location.search).get('id'); // Obtiene el valor del parámetro id
  const [dataProduct, setProductData] = useState(null);
  const [valorInput, setValorInput] = useState('');

  const handleInputChange = (e) => {
    setValorInput(e.target.value);
  };

  useEffect(() => {
    console.log("entreee a productooooooo: ")
    const fetchProductDetails = async () => {
      try {
        let response;
        if(idParam != undefined || idParam != "" || idParam != null){
          response = await ProductDetails(idParam);
          const productData = response.data.value; // Asume que la respuesta contiene una lista de productos
          console.log(productData);
          setProductData(productData);
        }
      else{
        console.log("ENTRE USEFECT DETALLES PRODUCTOOOO: " + idParam);
      }
    } catch (error) {
        console.error('Error al obtener detalles del producto:', error);
      }
    };
    fetchProductDetails();
  }, [idParam]);
  
  if (!dataProduct) {
    return <div>Cargando...</div>;
  }
  // Una vez que los datos estén disponibles, puedes renderizar tu componente Product con los datos
  return (
   
      <div className="flex items-center mt-10 ml-10 pl-20">
      <div>
      <ProductPhotos />
      </div>
     
      <div className="ml-20 mt-50">
        <h1 className="text-6xl">{dataProduct.nombre}</h1>
        <div className="border-b border-gray-300 pb-2 mb-4">
      {/* Esta es la línea debajo del nombre del producto */}
      </div>
        <p className="text-3xl text-green-500">{dataProduct.cant_stock >0 ?"Disponible":"No Disponible"}</p>
        <p className="text-2xl">Precio:</p>
        <p className="text-2xl text-red-500">$/ {dataProduct.precio}</p>

        <div className="flex flex-row">
        <div className="basis-1/4">
        <p className="text-2xl">Tamaño: </p>
        <p className="text-2xl">{dataProduct.size} </p>
        </div>
        
        <div className='basis-1/4 mx-2' >
        <p className="text-2xl">Color: </p> 
        <div className="w-6 h-6 rounded-full border border-black" style={{ backgroundColor: dataProduct.Color }}></div>
        </div>
        </div>

        <p className="text-2xl">Descripcion del producto: </p>
        <div  className="border border-gray-300 p-4 rounded">
          <p>{dataProduct.descripcion}</p>
        </div>
      
      <label className="text-2xl ">Cantidad:</label>
      <input className="border border-gray-300 rounded w-20 h-10 ml-2"
        type="number"
        value={valorInput}
        onChange={handleInputChange}
      />

      <div  className="flex justify-center mt-10">
      <a href={`/checkout/?id=${dataProduct.idProducto}&cant=${valorInput}`}>
          <button className="login-button m-5"> 
            Comprar ahora
          </button>
       </a>
          <button className="login-button-claro m-5">Agregar al carrito</button>
          
      </div>
      </div>
      </div>
      
  );
};
  export default Product;
    
 