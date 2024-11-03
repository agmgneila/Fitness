import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import DatosPersonales from './DatosPersonales';
import InformacionContacto from './InformacionContacto';
import PreferenciasEntrenamiento from './PreferenciasEntrenamiento';
import DatosPago from './DatosPago';

// Validación con Yup
const validationSchema = Yup.object({
  nombre: Yup.string().required('El nombre es obligatorio'),
  email: Yup.string().email('Introduce un email válido').required('El email es obligatorio'),
  telefono: Yup.string().required('El teléfono es obligatorio'),
  // Agregar más validaciones según sea necesario
});

const enviarDatosAPI = async (datos) => {
  try {
    const respuesta = await fetch('https://api.fitlife.com/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    });
    if (!respuesta.ok) throw new Error('Error al registrar usuario');
    console.log('Usuario registrado correctamente');
  } catch (error) {
    console.error(error.message);
  }
};

function FormularioFitLife() {
  const formik = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      direccion: '',
      ciudad: '',
      codigoPostal: '',
      entrenamiento: '',
      objetivos: '',
      disponibilidad: '',
      metodoPago: '',
      tarjeta: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      await enviarDatosAPI(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DatosPersonales formik={formik} />
      <InformacionContacto formik={formik} />
      <PreferenciasEntrenamiento formik={formik} />
      <DatosPago formik={formik} />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioFitLife;
