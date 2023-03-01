import { useState } from 'react';
import './App.css';
import Local from './views/Local';
import Portada from './views/Portada';
import Rexistro from './views/Rexistro';

function App() {

  const [ruta, setRuta] = useState("/")

  function manexadorClick(evento) {
    const elementoClickado = evento.target
    const idElementoClickado = elementoClickado.id
    setRuta(idElementoClickado)
  }

  return (
    <>
      <h1>Periodico</h1>
      <nav>
        <ul>
          <li id="/" onClick={manexadorClick}>Portada</li>
          <li id="/local/" onClick={manexadorClick}>Local</li>
          <li id="/rexistro/" onClick={manexadorClick}>Rexistro</li>
        </ul>
      </nav>
      { ruta === "/" && <Portada/>}
      { ruta === "/local/" && <Local/> }
      { ruta === "/rexistro/" && <Rexistro/> } 
    </>
  );
}

export default App;
