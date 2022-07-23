import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Crear from './components/Crear.jsx'
import Detalle from './components/Detalle.jsx'




function App() {
  
  return (
    <BrowserRouter>
      <div className="App">

        
        
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/crear" element={<Crear></Crear>}></Route>
          <Route exact path="/detalle/:idVideogame" element={<Detalle></Detalle>}></Route>
          

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
