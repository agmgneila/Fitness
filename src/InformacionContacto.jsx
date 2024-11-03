import React from 'react';

function InformacionContacto({ formik }) {
  return (
    <div>
      <h2>Información de Contacto</h2>
      <input
        type="text"
        name="direccion"
        placeholder="Dirección"
        value={formik.values.direccion}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <input
        type="text"
        name="ciudad"
        placeholder="Ciudad"
        value={formik.values.ciudad}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <input
        type="text"
        name="codigoPostal"
        placeholder="Código Postal"
        value={formik.values.codigoPostal}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </div>
  );
}

export default InformacionContacto;
