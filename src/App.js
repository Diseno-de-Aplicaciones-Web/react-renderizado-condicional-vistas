import { useState } from 'react';
import './App.css';
import Local from './views/Local';
import Portada from './views/Portada';
import Rexistro from './views/Rexistro';

function App() {

  const [ruta, setRuta] = useState("/")

  function irAPortada() {
    setRuta("/")
  }

  function irALocal() {
    setRuta("/local/")
  }

  function irARexistro() {
    setRuta("/rexistro/")
  }

  return (
    <>
      <h1>Periodico</h1>
      <nav>
        <ul>
          <li onClick={irAPortada}>Portada</li>
          <li onClick={irALocal}>Local</li>
          <li onClick={irARexistro}>Rexistro</li>
        </ul>
      </nav>
      { ruta === "/" && <Portada/>}
      { ruta === "/local/" && <Local/> }
      { ruta === "/rexistro/" && <Rexistro/> } 
    </>
  );
}

export default App;
