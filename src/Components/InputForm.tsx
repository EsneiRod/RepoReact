import './Style.css';

interface variables {
    tipo: string,
    placeholder: string,
    id: string,
    nombre: string
}

const InputForm = ({tipo, placeholder}: variables) => {
  return (
    <section className="input-container">
      <input 
        type={tipo}
        placeholder ={placeholder}
        className="miInput"
        />

    </section>
  )
}

export default InputForm

