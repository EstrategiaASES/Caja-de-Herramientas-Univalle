//importar libreria
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

//importar styles
import styleGlobal from './css/styleGeneral.css';
import json from './json/style.json';

//importar componentes
import { Home } from './components/pages/Home.tsx';
import { A404 } from './components/pages/A404.tsx';


/**
 *  @author : cristian Duvan Machado <cristian.machado@correounivalle.edu.co>
 *  @decs 
*/
export function App() {

  return (

    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home properties={json} />} />
          <Route path="*" element={<A404 />} />
        </Routes>
      </Router>
    </>

  );
}

//exportar el componente
export default App;