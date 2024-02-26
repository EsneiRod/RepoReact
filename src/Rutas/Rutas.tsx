import {
    Route,
    Routes,
  } from "react-router-dom";
import MostrarDatos from "../Components/MostrarDatos";
import Loggin from "../Components/Loggin";

const Rutas = () => {
  return (
    <Routes>
        <Route path = '/' element={<Loggin />} />
        <Route path = '/MostrarDatos' element={<MostrarDatos />} />
    </Routes>
  )
}

export default Rutas
