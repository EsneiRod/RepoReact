
interface variables {
    nombre: string
}

const Button = ({nombre}: variables) => {
  return (
    <div>
      <button 
      type="submit"
      className='boton01' 
      >{nombre}</button>
    </div>
  )
}

export default Button
