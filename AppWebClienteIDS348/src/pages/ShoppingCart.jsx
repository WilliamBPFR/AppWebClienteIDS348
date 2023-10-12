import React from 'react';
import ResumenCompra from '../components/Cart/Resum';
import Carrito from '../components/Cart/ViewProducts';

const ShoppingCart = () => {
    return (
        <div className="flex">
            <div className="w-3/4 p-4">
                <Carrito />
            </div>
            <div className="w-1/4 p-4">
                <ResumenCompra></ResumenCompra>
            </div>
        </div>
    )
}

export default ShoppingCart;
