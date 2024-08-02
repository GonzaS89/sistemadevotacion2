import './App.css';
import { useState } from 'react';
import Pantallavotacion from './Componentes/Pantallavotacion';


function App() {

  
  return (
    <div className="App">
       <h1 className='titulo-app'>Resultados electorales</h1>
       <Pantallavotacion />
    </div>
  );
}

export default App;
