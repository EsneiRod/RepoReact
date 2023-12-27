import { useState } from 'react'
import './App.css'
import Loggin from './Components/Loggin';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Loggin />
      <Footer />
    </>
  )
}

export default App
