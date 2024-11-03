import React from 'react';

function DatosPago({ formik }) {
  return (
    <div>
      <h2>Datos de Pago</h2>
      <select
        name="metodoPago"
        value={formik.values.metodoPago}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="" label="Selecciona un método de pago" />
        <option value="tarjeta" label="Tarjeta de Crédito" />
        <option value="paypal" label="PayPal" />
      </select>
      
      <input
        type="text"
        name="tarjeta"
        placeholder="Número de Tarjeta"
        value={formik.values.tarjeta}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </div>
  );
}

export default DatosPago;
