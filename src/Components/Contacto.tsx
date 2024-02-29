import React from 'react';

const Contacto = () => {

    const contactoInfo = {
        nombre: 'Nombre del Contacto',
        correo: 'correo@example.com',
        telefono: '123-456-7890',
      };

  return (
    <div>
      <h2 className='mostrar-datos-title'>CONTACTA CON NOSOTROS</h2> 
      <p className='p-contacto'>
        Si quieres información sobre cualquiera de nuestros productos o estas interesado en trabajar con nosotros,
        rellena nuestro formulario y nos pondremos en contacto contigo lo antes posible.
        <br></br>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta eligendi est perspiciatis dolore obcaecati iure debitis ea! Odit, at. Tenetur vitae aut quibusdam ut repudiandae labore eaque incidunt fuga perspiciatis!
      </p>  
      <h2>{contactoInfo.nombre}</h2>
      <p>Correo electrónico: {contactoInfo.correo}</p>
      <p>Teléfono: {contactoInfo.telefono}</p>
    </div>
  );
};

export default Contacto;