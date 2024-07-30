import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
          
          <span className='contador-caja'>Total de votantes : <motion.div className='contador-contenedor'
          key={totalVotos}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}>{totalVotos}</motion.div> electores</span>
    </div>
  );
}

export default App;
