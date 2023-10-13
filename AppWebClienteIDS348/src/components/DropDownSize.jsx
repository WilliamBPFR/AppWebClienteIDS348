import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DropDownSize() {
    const [selectedSize, setSelectedSize] = useState(null);
    const sizes = [
        { name: 'Extra Small', code: 'XS' },
        { name: 'Small', code: 'S' },
        { name: 'Medium', code: 'M' },
        { name: 'Large', code: 'L' },
        { name: 'Extra Large', code: 'XL' }
    ];

    return (
        <div className="border border-gray rounded flex justify-center">
        <Dropdown 
          value={selectedSize} 
          onChange={(e) => setSelectedSize(e.value)} 
          options={sizes} 
          optionLabel="name" 
          placeholder="Seleccionar" 
          className="w-full md:w-14rem"
          panelClassName="bg-white max-w-content custom-dropdown-width" // Aplicar la clase personalizada
        />
      </div>
      

      
    )
}
    