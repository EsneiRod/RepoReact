import Card from './Card';
import '../Style/Style.css';

//Estos datos después se obtendrán al consumir un servicio
const tarjetasDatos = [
  {
    titulo: 'Título de la Tarjeta 1',
    descripcion: 'Descripción de la Tarjeta 1.',
    imgUrl: 'https://via.placeholder.com/300',
  },
  {
    titulo: 'Título de la Tarjeta 2',
    descripcion: 'Descripción de la Tarjeta 2.',
    imgUrl: 'https://via.placeholder.com/300',
  },
  {
    titulo: 'Título de la Tarjeta 3',
    descripcion: 'Descripción de la Tarjeta 3.',
    imgUrl: 'https://via.placeholder.com/300',
  },
  {
    titulo: 'Título de la Tarjeta 4',
    descripcion: 'Descripción de la Tarjeta 4.',
    imgUrl: 'https://via.placeholder.com/300',
  },
];

// Agrupar las tarjetas de 4 elementos
const MostrarDatos = () => {
  const tarjetasPorFila = [];
  for (let i = 0; i < tarjetasDatos.length; i += 4) {
    tarjetasPorFila.push(tarjetasDatos.slice(i, i + 4));
  }

  return (
    <div className="mostrar-datos-container">
      <h2 className="mostrar-datos-title">Mis Datos</h2>
      {tarjetasPorFila.map((fila, index) => (
        <div key={index} style={{ display: 'flex' }}>
          {fila.map((tarjeta, tarjetaIndex) => (
            <Card
              key={tarjetaIndex}
              titulo={tarjeta.titulo}
              descripcion={tarjeta.descripcion}
              imgUrl={tarjeta.imgUrl}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MostrarDatos;