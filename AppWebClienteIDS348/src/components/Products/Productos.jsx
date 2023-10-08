import React from "react";
import laptogamer from './laptogamer.jpeg';

const Products = () => {
    return (
      
        <div className="contenedor-producto">

            <img 
            className="imagen-producto"
            src={laptogamer}
            alt="foto-producto"
            ></img>

            <div className="info-producto">

                <p className="titulo">Acer Modelo </p>
                <p className="descripcion"> Descripcion Modelo 1</p>
                <p className="precio"> 1000</p>
            </div>
        </div>
    )
  }

  export default Products ;