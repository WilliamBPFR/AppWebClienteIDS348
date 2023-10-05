import React from 'react';
import { Collapse } from 'antd';

const items = [
  {
    key: '1',
    label: 'Categoría',
    children: (
      <ul className="no-bullets">
  <li><a href="#">Pantalón</a></li>
  <li><a href="#">Camisetas</a></li>
  <li><a href="#">Short</a></li>
</ul>
    ),
  },
  {
    key: '2',
    label: 'Precios',
    children: (
      <div>
        <label class="custom-label">
  Min. <input type='number' class="custom-input" />
</label>
<label class="custom-label">
  Max. <input type='number' class="custom-input" />
</label>
      </div>
    ),
  },
  {
    key: '3',
    label: 'Otros Filtros',
    children: (
      <div class="checkbox-group">
  <label>
    Descuento
    <input type='checkbox' /> 
  </label>
  <label>
    En stock
    <input className='down-input' type='checkbox' /> 
  </label>
</div>

    ),
  },
];

const App = () => <Collapse defaultActiveKey={['1','2','3']} ghost items={items} />
export default App;
