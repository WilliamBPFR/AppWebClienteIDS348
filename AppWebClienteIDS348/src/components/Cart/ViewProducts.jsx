import React, { useState } from 'react';
import foto2 from '../../assets/foto2.jpg';


const Carrito = () => {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidadChange = (event) => {
    setCantidad(event.target.value);
  };

  return (
    <div className="carrito-container">
      <div className="carrito-items">
        <h2>Carrito de Compras</h2>
        <hr className="divider" />

        <div className="item">
          <div className="item-image">
            <img className='item-image' src={foto2} alt="Producto 1" />
          </div>
          <div className="item-details">
            <p>EX DISPLAY: MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
            <p>Precio: $10.00</p>
            <label htmlFor="cantidad">Cantidad:</label>
            <select id="cantidad" value={cantidad} onChange={handleCantidadChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
          </div>
          <button className="remove-item">Eliminar</button>
        </div>
        <hr className="divider-2" />
      </div>
    </div>
  );
};

export default Carrito;