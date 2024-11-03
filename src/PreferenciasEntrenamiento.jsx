import React from 'react';

function PreferenciasEntrenamiento({ formik }) {
  return (
    <div>
      <h2>Preferencias de Entrenamiento</h2>
      <select
        name="entrenamiento"
        value={formik.values.entrenamiento}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      >
        <option value="" label="Selecciona un tipo de entrenamiento" />
        <option value="fuerza" label="Fuerza" />
        <option value="cardio" label="Cardio" />
        <option value="flexibilidad" label="Flexibilidad" />
      </select>
      
      <input
        type="text"
        name="objetivos"
        placeholder="Objetivos"
        value={formik.values.objetivos}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      
      <input
        type="text"
        name="disponibilidad"
        placeholder="Disponibilidad"
        value={formik.values.disponibilidad}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </div>
  );
}

export default PreferenciasEntrenamiento;
