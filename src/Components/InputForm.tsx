import '../Style/Style.css';
import React from 'react';

interface variables {
    tipo: string,
    placeholder: string,
    id?: string,
    nombre?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<variables> = ({ tipo, placeholder, value, onChange }) => {
  return (
    <section className="input-container">
      <input 
        type={tipo}
        placeholder ={placeholder}
        value={value} 
        onChange={onChange} 
        className="miInput"
        />
    </section>
  )
}

export default InputForm

