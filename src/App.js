import { useState } from 'react';
import './App.css';
import Local from './views/Local';
import Portada from './views/Portada';
import Rexistro from './views/Rexistro';

function App() {

  const [ruta, setRuta] = useState("/")

  return (
    <>
      <h1>Periodico</h1>
      <nav>
        <ul>
          <li onClick={()=>{setRuta("/")}}>Portada</li>
          <li onClick={()=>{setRuta("/local/")}}>Local</li>
          <li onClick={()=>{setRuta("/rexistro/")}}>Rexistro</li>
        </ul>
      </nav>
      { ruta === "/" && <Portada/>}
      { ruta === "/local/" && <Local/> }
      { ruta === "/rexistro/" && <Rexistro/> } 
    </>
  );
}

export default App;
