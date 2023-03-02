import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Local from './views/Local';
import Portada from './views/Portada';
import Rexistro from './views/Rexistro';

function App() {

  return (
    <>
      <h1>Periodico</h1>

      <nav>
        <ul>
          <li><Link to={"/"}>Portada</Link></li>
          <li><Link to={"/local/"}>Local</Link></li>
          <li><Link to={"/rexistro/"}>Rexistro</Link></li>
        </ul>
      </nav>
      
      <Routes>
        <Route path='/' element={<Portada/>}/>
        <Route path='/local/' element={<Local/>}/>
        <Route path='/rexistro/' element={<Rexistro/>}/>
      </Routes>
    </>
  );
}

export default App;
