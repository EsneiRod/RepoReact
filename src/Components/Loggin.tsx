import React, { useState } from 'react';
import loggin from '../img/login.jpg';
import '../App.css';
import InputForm from './InputForm';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { ACCESO_OK, ACCESO_DENEGADO, DATOS_INCORRECTOS} from '../Constants/NamePath';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

const Loggin = () => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const navegar = useNavigate();
  const MySwal = withReactContent(Swal);

  //Dejo un usuario y una clave quemada para simular el acceso
  const usuariosRegistrados = [
    { usuario: 'Admin', clave: '123' }
  ];

  const Ingresar = (event: React.FormEvent) => {
    event.preventDefault(); // Evitar la recarga de la página al enviar el formulario

    if (usuariosRegistrados.find((user) => user.usuario === usuario && user.clave === clave)) {
      MySwal.fire({
        title: 'ACCESO',
        text: ACCESO_OK,
        icon: 'success',
      });
      navegar('/MostrarDatos');
    } else {
      MySwal.fire({
        title: ACCESO_DENEGADO,
        text: DATOS_INCORRECTOS,
        icon: 'error',
      });
    }
  };

  return (
    <div>
      <section className='sectionForm'>
        <form onSubmit={Ingresar}>
          <img src={loggin} alt="React Logo" className="logo" />
          <h2>Inicio Sesión</h2>
          <InputForm
            tipo={'text'}
            placeholder={'Usuario'}
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <InputForm
            tipo={'password'}
            placeholder={'Clave'}
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
          <Button nombre={'Ingresar'} />
        </form>
      </section>
    </div>
  );
};

export default Loggin
