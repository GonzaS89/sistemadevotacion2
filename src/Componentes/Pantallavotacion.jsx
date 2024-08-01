import React from 'react';
import { useState , useEffect } from 'react';
import Resultadoporcandidato from './Resultadoporcandidato';
import candidatos from '../candidatos.json';
import Totaldevotantes from './Totaldevototantes';
import Votos from './Votos';
import '../Estilos/pantallavotacion.css'

const Pantallavotacion = () => {

    
    const [totalVotos , setTotalVotos] = useState(0)
    const [votosMilei , setVotosMilei] = useState(0);
    const [votosMassa , setVotosMassa] = useState(0);

    useEffect(() => {
      setTotalVotos(votosMilei + votosMassa)
    },[votosMilei , votosMassa])

    const recibirId = (id) => {
        id === 'javier milei' ?
        setVotosMilei(votosMilei + 1): 
        setVotosMassa(votosMassa + 1);
      }

    // const recibirVotos = (votoRecibido) => {setTotalVotos(totalVotos + 1)}

    return (
    <div className= 'bloque-resultados'>
        {candidatos.map(candidato => (
          <Resultadoporcandidato 
          nombre={candidato.nombre} 
          imagen={candidato.imagen}
          id = {candidato.nombre}
          enviarId = {recibirId}
          totalVotos = {totalVotos}
          votosMilei = {votosMilei}
          votosMassa = {votosMassa}/>
        ))}
        <>
          <div className='boletas-container'>
              {candidatos.map (candidato => (
                <Votos 
                boleta = {candidato.boleta}
                nombreCandidato = {candidato.nombre}/>
              ))}
          </div>
        </>
        <>
          <Totaldevotantes 
          totalVotos = {totalVotos}/>
        </>
      </div>
      
    )
}

export default Pantallavotacion