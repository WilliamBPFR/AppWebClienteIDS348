import React, { useState } from 'react';
import Swal from 'sweetalert2';
import foto1 from '@/assets/foto1.jpg';

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
    <div className="resumen-compra-container mt-6">
      <div className="direccion-envio-1">
        <h3 >Dirección de Envío</h3>
        <p>
          {direccionEnvio.calle}, {direccionEnvio.ciudad}, {direccionEnvio.codigoPostal}
        </p>
        <button
          onClick={handleChangeDireccionEnvio}
          className="login-button"
        >
          Cambiar Dirección
        </button>
      </div>
      <div className="border-b border-gray-300 pb-2 mb-4"></div>
      <div className="metodo-pago">
        <h3>Método de Pago</h3>
        <p>
          <span className="m-4 metodo-pago-label font-bold">Método de Pago:</span>
          <span> {metodoPago}</span>
        </p>
        {metodoPago === 'Tarjeta de Crédito' && (
          <div className="tarjeta-de-credito">
            <label className="font-bold pl-5">Número de Tarjeta:</label>
            <input 
              type="text"
              value={numeroTarjeta}
              onChange={(e) => setNumeroTarjeta(e.target.value)}
            />
            <label className="font-bold">Fecha de Vencimiento:</label>
            <input
              type="text"
              value={fechaVencimiento}
              onChange={(e) => setFechaVencimiento(e.target.value)}
            />
            <label className="font-bold ">CVC:</label>
            <input
              type="text"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
            />

          </div>
          
        )}
        <div >
          <button
            onClick={handleChangeMetodoPago}
            className="m-4 login-button"
          >
            Cambiar Método de Pago
          </button>
          <div className="border-b border-gray-300 pb-2 mb-4"></div>

        </div>
      </div>
      <div className="seleccion-envio">
        <h3>Selección de Envío</h3>
        <p>
          <input type="radio" name="envio" value="envio-rapido" /> Envío Rápido<br></br>
          <input type="radio" name="envio" value="envio-estandar" /> Envío Estándar
        </p>
      </div>
      <button className="login-button">
        Proceder al Pago
      </button>
      <div className="border-b border-gray-300 pb-2 mb-4"></div>


            {/* NUEVA COSA */}

<div className="productos-container">
  <h3>Título de Productos a Comprar</h3>
  <div className="producto flex flex-nowrap">
    <div className="prod  col-span-2">
      <div className="producto-content">
        <div className="imagen-producto2 ">
          <img
            src={foto1}
            alt={foto1}
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <div className="detalles-producto">
          <h4 className="nombre-producto">Producto 1</h4>
          <p>Cantidad a comprar: 5</p>
          <p>Fecha de llegada: 15/10/2023</p>
        </div>
      </div>
    </div>
  </div>
  <hr />

  <div className="producto">
    <div className="prod">
      <div className="producto-content">
        <div className="imagen-producto2">
          <img
            src={foto1}
            alt={foto1}
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <div className="detalles-producto">
          <h4 className="nombre-producto">Producto 2</h4>
          <p>Cantidad a comprar: 3</p>
          <p>Fecha de llegada: 20/10/2023</p>
        </div>
      </div>
    </div>
  </div>
  <hr />

  <div className="producto">
    <div className="prod">
      <div className="producto-content">
        <div className="imagen-producto2">
          <img
            src={foto1}
            alt={foto1}
            style={{ maxWidth: '100px', maxHeight: '100px' }}
          />
        </div>
        <div className="detalles-producto">
          <h4 className="nombre-producto">Producto 3</h4>
          <p>Cantidad a comprar: 2</p>
          <p>Fecha de llegada: 25/10/2023</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default CheckOut;
