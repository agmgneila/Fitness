import React from 'react';

function DatosPersonales({ formik }) {
  return (
    <div>
      <h2>Datos Personales</h2>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.nombre && formik.errors.nombre && (
        <p className="error">{formik.errors.nombre}</p>
      )}
      
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email && (
        <p className="error">{formik.errors.email}</p>
      )}
      
      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        value={formik.values.telefono}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.telefono && formik.errors.telefono && (
        <p className="error">{formik.errors.telefono}</p>
      )}
    </div>
  );
}

export default DatosPersonales;
