import { useState } from 'react'
import loggin from './img/login.jpg';
import './App.css'
import InputForm from './Components/InputForm'
import RegistroUsuario from './Components/RegistroUsuario';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className='sectionForm'>
      <form>
      <img src={loggin} alt="React Logo" className="logo" />
        <h2>Inicio Sesión</h2>
        <InputForm tipo={'text'} placeholder={'Usuario'} />
        <InputForm tipo={'password'} placeholder={'Clave'} />
        <button className='botonIngresar' type="submit">Ingresar</button>
        <div className="link-container">
          <a href='/RegistroUsuario'>Registrarme</a>
        </div>
      </form>
    </section>
    </>
  )
}

export default App
