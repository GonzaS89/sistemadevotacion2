import React from 'react';
import { useState , useEffect } from 'react';
import Resultadoporcandidato from './Resultadoporcandidato';
import candidatos from '../candidatos.json';
import Totaldevotantes from './Totaldevototantes';
import Votos from './Votos';
import '../Estilos/pantallavotacion.css'

const Pantallavotacion = (props) => {

    
    const [totalVotos , setTotalVotos] = useState(0);
    const [votosMilei , setVotosMilei] = useState(0);
    const [votosMassa , setVotosMassa] = useState(0);
    const [condicionVotosTotales, setCondicionVotosTotales] = useState(false);

    const [id , setID] = useState('');

    useEffect(() => {
      setTotalVotos(votosMilei + votosMassa)
    },[votosMilei , votosMassa]);

    useEffect(() => {
      totalVotos > 0 && setCondicionVotosTotales(true)
    },[totalVotos])


    const recibirId = (id) => {
        setID(id);
        id === 'javier milei' ?
        setVotosMilei(votosMilei + 1): 
        setVotosMassa(votosMassa + 1);
      }

      useEffect(() => {
        totalVotos > 0 &&
        setCondicionVotosTotales(true);
        setTimeout(() => {
          setCondicionVotosTotales(false);
        }, 750);
      },[totalVotos])


    return (
    <div className='bloque-resultados'>
      <div className={votosMassa > votosMilei || id === 'sergio massa' ? 'porcentajes-container ascenso' : 'porcentajes-container'}>
      {candidatos.map(candidato => (
          <Resultadoporcandidato 
          nombre={candidato.nombre} 
          imagen={candidato.imagen}
          id = {id}
          totalVotos = {totalVotos}
          votosMilei = {votosMilei}
          votosMassa = {votosMassa}/>
        ))}
      </div>
      <p className={condicionVotosTotales ? 'votostotales zoomearvotostotales' : 'votostotales'}>{totalVotos}</p>
        <>
          <div className='boletas-container'>
              {candidatos.map (candidato => (
                <Votos 
                boleta = {candidato.boleta}
                nombreCandidato = {candidato.nombre}
                enviarId = {recibirId}
                enviarTotalVotos = {totalVotos}/>
              ))}
          </div>
        </>
        <>
          {/* <Totaldevotantes 
          totalVotos = {totalVotos}/> */}
        </>
      </div>
    )
}

export default Pantallavotacion