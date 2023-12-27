
import loggin from '../img/login.jpg';
import '../App.css'
import InputForm from './Input'
import Button from './Button';

const Loggin = () => {
  return (
    <div>
      <section className='sectionForm'>
      <form>
      <img src={loggin} alt="React Logo" className="logo" />
        <h2>Inicio Sesión</h2>
        <InputForm tipo={'text'} placeholder={'Usuario'} />
        <InputForm tipo={'password'} placeholder={'Clave'} />
        <Button nombre={'Ingresar'} />
        {/* <button className='botonIngresar' type="submit">Ingresar</button> */}
        <div className="link-container">
          <a href='/RegistroUsuario'>Registrarme</a>
        </div>
      </form>
    </section>
    </div>
  )
}

export default Loggin
