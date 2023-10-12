import React from 'react';


import Clear_button from './Buttonfilter.jsx';
import App from './drow.jsx';
import ButtonApply from './ButtonApply.jsx'

const Filter = () => {
  return (
    <div className='container-filtro'>
        
      <h4 className='titulo-filtro'>Filtros</h4>
      
      <div className='button '>
        <Clear_button/>
      </div>
      
      <App/>
      
      <ButtonApply/>
      
    </div>
  );
};

export default Filter;