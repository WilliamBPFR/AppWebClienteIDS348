import React from 'react';
import laptogamer from '@/assets/laptogamer.jpeg';
import { Outlet, Link } from 'react-router-dom';


const Home = () => {
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
                <a href='/product'>
                <button className="login-button">Ver mas </button>
                </a>
            </div>
        </div>
    )
}
 
export default Home;