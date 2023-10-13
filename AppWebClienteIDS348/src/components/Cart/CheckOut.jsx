import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CheckOut = () => {
  const [direccionEnvio, setDireccionEnvio] = useState({
    calle: 'Calle de Ejemplo',
    ciudad: 'Ciudad de Ejemplo',
    codigoPostal: '12345',
  });

  const [metodoPago, setMetodoPago] = useState('Tarjeta de Crédito');
  const [numeroTarjeta, setNumeroTarjeta] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [cvc, setCvc] = useState('');

  const handleChangeMetodoPago = async () => {
    const { value: nuevoMetodoPago } = await Swal.fire({
      title: 'Cambiar Método de Pago',
      input: 'select',
      inputOptions: {
        'Tarjeta de Crédito': 'Tarjeta de Crédito',
        'PayPal': 'PayPal',
        'Transferencia Bancaria': 'Transferencia Bancaria',
      },
      inputValue: metodoPago,
      showCancelButton: true,
    });

    if (nuevoMetodoPago) {
      setMetodoPago(nuevoMetodoPago);
      if (nuevoMetodoPago === 'Tarjeta de Crédito') {
        await Swal.fire({
          title: 'Ingresa los detalles de la tarjeta',
          html:
            '<input type="text" id="numeroTarjeta" class="swal-input" placeholder="Número de Tarjeta">' +
            '<input type" text" id="fechaVencimiento" class="swal-input" placeholder="Fecha de Vencimiento">' +
            '<input type="text" id="cvc" class="swal-input" placeholder="CVC">',
          focusConfirm: false,
          preConfirm: () => {
            setNumeroTarjeta(document.getElementById('numeroTarjeta').value);
            setFechaVencimiento(document.getElementById('fechaVencimiento').value);
            setCvc(document.getElementById('cvc').value);
          },
        });
      }
      Swal.fire('Método de pago actualizado con éxito');
    }
  };

  const handleChangeDireccionEnvio = async () => {
    const { value: nuevaDireccion } = await Swal.fire({
      title: 'Cambiar Dirección de Envío',
      html:
        '<input type="text" id="calle" class="swal-input" placeholder="Calle" value="' +
        direccionEnvio.calle +
        '">' +
        '<input type="text" id="ciudad" class="swal-input" placeholder="Ciudad" value="' +
        direccionEnvio.ciudad +
        '">' +
        '<input type="text" id="codigoPostal" class="swal-input" placeholder="Código Postal" value="' +
        direccionEnvio.codigoPostal +
        '">',
      focusConfirm: false,
      preConfirm: () => {
        const nuevaCalle = document.getElementById('calle').value;
        const nuevaCiudad = document.getElementById('ciudad').value;
        const nuevoCodigoPostal = document.getElementById('codigoPostal').value;
        setDireccionEnvio({
          calle: nuevaCalle,
          ciudad: nuevaCiudad,
          codigoPostal: nuevoCodigoPostal,
        });
      },
    });

    if (nuevaDireccion) {
      Swal.fire('Dirección de envío actualizada con éxito');
    }
  };

  return (
    <div className="resumen-compra-container">
      <div className="direccion-envio-1">
        <h3 >Dirección de Envío</h3>
        <p>
          {direccionEnvio.calle}, {direccionEnvio.ciudad}, {direccionEnvio.codigoPostal}
        </p>
        <button
          onClick={handleChangeDireccionEnvio}
          className="cambiar-direccion-button btn-limpiar"
        >
          Cambiar Dirección
        </button>
      </div>
      <hr className="linea-separadora" />
      <div className="metodo-pago">
        <h3>Método de Pago</h3>
        <p>
          <span className="metodo-pago-label">Método de Pago: {metodoPago}</span>
        </p>
        {metodoPago === 'Tarjeta de Crédito' && (
          <div className="tarjeta-de-credito">
            <label>Número de Tarjeta:</label>
            <input
              type="text"
              value={numeroTarjeta}
              onChange={(e) => setNumeroTarjeta(e.target.value)}
            />
            <label>Fecha de Vencimiento:</label>
            <input
              type="text"
              value={fechaVencimiento}
              onChange={(e) => setFechaVencimiento(e.target.value)}
            />
            <label>CVC:</label>
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />
          </div>
        )}
        <button
          onClick={handleChangeMetodoPago}
          className="cambiar-metodo-pago-button btn-limpiar"
        >
          Cambiar Método de Pago
        </button>
      </div>
      <hr className="linea-separadora" />
      <div className="seleccion-envio">
        <h3>Selección de Envío</h3>
        <p>
          <input type="radio" name="envio" value="envio-rapido" /> Envío Rápido<br></br>
          <input type="radio" name="envio" value="envio-estandar" /> Envío Estándar
        </p>
      </div>
      <hr className="linea-separadora" />
      <button className="proceder-pago-button btn-Apply">
        Proceder al Pago
      </button>
    </div>
  );
};

export default CheckOut;
