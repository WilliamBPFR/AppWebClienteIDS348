import React from 'react';
import Products from './components/Products/Productos'; // Importa el componente Products si es necesario

function CustomPage() {
  return (
    <div>
      <h1>Productos</h1>
      
      <Products /> 
      <Products />
      <Products />
      <Products />
    </div>
  );
}

export default CustomPage;
