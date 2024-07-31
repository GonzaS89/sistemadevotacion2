import './App.css';
import { useState , useEffect } from 'react';
import { motion } from 'framer-motion';
import Candidato from './Componentes/candidato';
import candidatos from "./candidatos.json";

function App() {

  const [totalVotos , setTotalVotos] = useState(0);
  const [votosMilei , setVotosMilei] = useState(0);
  const [votosMassa , setVotosMassa] = useState(0);

  const recibirVotos = (votoRecibido) => {setTotalVotos(totalVotos + 1)}

  const recibirId = (id) => {
    id === 'javier milei' ? 
    setVotosMilei(votosMilei + 1): 
    setVotosMassa(votosMassa + 1);
  }

  return (
    <div className="App">
      <h1 className='titulo-app'>Resultados electorales</h1>
      <div className= {votosMassa > votosMilei ? 'bloque-resultados ascenso' : 'bloque-resultados'}>
        {candidatos.map(candidato => (
          <Candidato 
          nombre={candidato.nombre} 
          imagen={candidato.imagen}
          id = {candidato.nombre}
          enviarVotos = {recibirVotos}
          totalVotos = {totalVotos}
          enviarId = {recibirId}/>
        ))}
      </div>
          <span className='contador-caja'>Total de votantes : <motion.div className='contador-contenedor'
          key={totalVotos}
          initial={{ opacity: 0, y: 50 , scale : 0}}
          animate={{ opacity: 1, y: 0 , scale : 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: .25 }}>{totalVotos}</motion.div> {totalVotos > 1 || totalVotos === 0  ? 'Electores' : 'Elector'}</span>
    </div>
  );
}

export default App;
