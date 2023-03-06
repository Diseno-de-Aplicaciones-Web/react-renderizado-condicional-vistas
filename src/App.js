import { Route, Routes, Link, BrowserRouter } from "react-router-dom"
import Portada from "./views/Portada"
import Local from "./views/Local"
import Rexistro from "./views/Rexistro"
import ProbasBucles from "./views/ProbaBucle"
import './App.css';

function App() {

  return (
    <>
      <h1>Periodico</h1>
      
      <BrowserRouter>

        <nav>
            <ul>
            <li><Link to={"/"}>Portada</Link></li>
            <li><Link to={"/local/"}>Local</Link></li>
            <li><Link to={"/rexistro/"}>Rexistro</Link></li>
            <li><Link to={"/bucles/"}>Bucles</Link></li>
            </ul>
        </nav>

        <Routes>
            <Route path='/' element={<Portada/>}/>
            <Route path='/local/' element={<Local/>}/>
            <Route path='/rexistro/' element={<Rexistro/>}/>
            <Route path='/bucles/' element={<ProbasBucles/>}/>
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
