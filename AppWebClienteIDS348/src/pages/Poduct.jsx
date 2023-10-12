import React from 'react'
import { Button, ConfigProvider, Space } from 'antd';
import ProductPhotos from '@/components/ProductPhotos';
import DropDownSize from '@/components/DropDownSize';
import Pagination from '../components/Pagination';

const Product = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#54428E',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#FFFFFF',
      },
    }}
  >
    
    <div className="flex items-center mt-10 ml-10 pl-20">
      <div>
      <ProductPhotos />
      </div>
    <div className="ml-20 mt-50">
    <h1 className="text-6xl">Chaqueta acolchada con manga larga</h1>
    <div className="border-b border-gray-300 pb-2 mb-4">
      {/* Esta es la línea debajo del nombre del producto */}
    </div>
    <p className="text-3xl text-green-500 ">Disponible</p>
    <p className="text-2xl">Precio:</p> 
    <p className="text-2xl text-red-500">S/ 200.00</p>

    <div class="flex flex-row">
    <div class="basis-1/4">
    <p className="text-2xl">Tamaño: </p> 
    <DropDownSize/>
    </div>
    <div className='basis-1/4 mx-2' >
    <p className="text-2xl">Color: </p> 
    <div className="w-6 h-6 rounded-full border border-black" style={{ backgroundColor: "#000000" }}></div>
    </div>

    </div>
   
    <p className="text-2xl">Descripción del producto:</p>
    <div  className="border border-gray-300 p-4 rounded">
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
    </div>
    <label className="text-2xl">Cantidad:</label>
      <input
        type="number"
      />
    <div  className="flex justify-center mt-10">
      <Button type="primary" className="mr-4">Comprar ahora</Button>
      <Button className="mr-4">Agregar al carrito</Button>
    </div>
    </div>

    </div>

    
  </ConfigProvider>
 
)

export default Product