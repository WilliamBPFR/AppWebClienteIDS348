import React from 'react';
import foto1 from '@/assets/foto1.jpg';
import Filter from '../components/filter/Filter';
import Pagination from '../components/Pagination';

const Home = () => {
    return (
      
        <div>
        <div class="flex flex-nowrap row-spacing">
            <div className=" mx-4 row-span-3">
            <Filter/>
             </div>
                
             <div className='mx-2 contenedor-producto card col-span-2'>
            <img 
            className="imagen-producto"
            src={foto1}
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

            <div className='mx-2 contenedor-producto card col-span-2'>
            <img 
            className="imagen-producto"
            src={foto1}
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

            <div className='mx-2 contenedor-producto card col-span-2'>
            <img 
            className="imagen-producto"
            src={foto1}
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

            <div className='mx-2 contenedor-producto card col-span-2'>
            <img 
            className="imagen-producto"
            src={foto1}
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
            
        </div>

        <div class="flex flex-nowrap">
            <div className=" mx-4 row-span-3 invisible">
            <Filter/>
             </div>
                
             <div className='mx-2 contenedor-producto card col-span-2'>
            <img 
            className="imagen-producto"
            src={foto1}
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

            <div className='mx-2 contenedor-producto card col-span-2'>
            <img 
            className="imagen-producto"
            src={foto1}
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

            <div className='mx-2 contenedor-producto card col-span-2'>
            <img 
            className="imagen-producto"
            src={foto1}
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

            <div className='mx-2 contenedor-producto card col-span-2'>
            <img 
            className="imagen-producto"
            src={foto1}
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
            
        </div>

        <div>
        <Pagination/>
        </div>
        
        </div>
    )
}
 
export default Home;