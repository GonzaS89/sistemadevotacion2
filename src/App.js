import './App.css';
import { useState } from 'react';
import Candidato from './Componentes/candidato';
import candidatos from "./candidatos.json";

function App() {

  const [totalVotos , setTotalVotos] = useState(0);
  const [votosMilei , setVotosMilei] = useState(0);
  const [votosMassa , setVotosMassa] = useState(0);
  const [porcentaje , setPorcentaje] = useState(0);

  const recibirVotos = (votoRecibido) => {setTotalVotos(totalVotos + 1)}

  const recibirId = (id) => {
    id === 'javier milei' ? 
    setVotosMilei(votosMilei + 1): 
    setVotosMassa(votosMassa + 1);
  }

  return (
    <div className="App">
      <h1 className='titulo-app'>Resultados electorales</h1>
      <h2>Lista de candidatos</h2>
      <div className='bloque-resultados'>
        {candidatos.map(candidato => (
          <Candidato 
          nombre={candidato.nombre} 
          imagen={candidato.imagen}
          enviarVotos = {recibirVotos}
          totalVotos = {totalVotos}
          enviarId = {recibirId}/>
        ))}
      </div>
          <h1>Total de votantes : {totalVotos} electores</h1>
    </div>
  );
}

export default App;
