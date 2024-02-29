
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import { BrowserRouter as Router } from "react-router-dom"
import Rutas from './Rutas/Rutas';

function App() {

  return (
    <Router>
      <Header />
      <Rutas />
      <Footer />
    </Router>
  )
}

export default App
