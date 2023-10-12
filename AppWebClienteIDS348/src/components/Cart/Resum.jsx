import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ResumenCompra = () => {
  const [direccionEnvio, setDireccionEnvio] = useState({
    calle: 'Calle de Ejemplo',
    ciudad: 'Ciudad de Ejemplo',
    codigoPostal: '12345',
  });

  const subtotal = 100; // Ejemplo de subtotal
  const descuento = 10; // Ejemplo de descuento
  const impuesto = 5; // Ejemplo de impuesto
  const total = subtotal - descuento + impuesto; // Cálculo del total

  const handleChangeDireccion = async () => {
    const inputValue = `${direccionEnvio.calle}, ${direccionEnvio.ciudad}, ${direccionEnvio.codigoPostal}`;

    const { value: nuevaDireccion } = await Swal.fire({
      title: 'Cambiar Dirección de Envío',
      input: 'text',
      inputLabel: 'Nueva Dirección de Envío',
      inputValue: inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Debes ingresar una dirección';
        }
      }
    });

    if (nuevaDireccion) {
      const [calle, ciudad, codigoPostal] = nuevaDireccion.split(', ');
      setDireccionEnvio({ calle, ciudad, codigoPostal });
      Swal.fire('Dirección actualizada con éxito');
    }
  };

  const handleCheckout = () => {
    // Implementa la lógica para el proceso de pago y redirección a la pasarela de pago
    alert('Proceso de pago aún no implementado');
  };

  return (
    <div className="resumen-compra">
      <div className="resumen-detalles">
        <h2>Resumen</h2>
        <div className="detalle total">
          <span>Total de Productos:</span>
          <span>${subtotal}</span>
        </div>

        <div className="detalle">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="detalle">
          <span>Descuento:</span>
          <span>${descuento}</span>
        </div>
        <div className="detalle">
          <span>Impuesto:</span>
          <span>${impuesto}</span>
        </div>
        <hr className="linea-separadora" />

        <div className="detalle total">
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </div>
      <div className="direccion-envio">
        <h3>Dirección de Envío</h3>
        <p>
          {direccionEnvio.calle}, {direccionEnvio.ciudad}, {direccionEnvio.codigoPostal}
          <button onClick={handleChangeDireccion} className="cambiar-direccion">
            Cambiar
          </button>
        </p>
      </div>
      <button onClick={handleCheckout} className="checkout">
        Checkout
      </button>
    </div>
  );
};

export default ResumenCompra;
