import { React, useState} from "react";
import { motion } from 'framer-motion';
import "../Estilos/candidato.css";


const Candidato = (props) => {

  const [votos, setVotos] = useState(0);
  const [votosMilei , setVotosMilei] = useState(0);
  const [votosMassa , setVotosMassa] = useState(0);



  const validarId = () => {
    props.nombre === 'javier milei' ? 
    setVotosMilei(votosMilei + 1 ) :
    setVotosMassa(votosMassa + 1);
  }

  const aumentarVotos = () => {
    setVotos(votos + 1);
  };

  let porcentaje;

  const sumarYEnviar = () => {
    return (
      aumentarVotos(),
      validarId(),
      props.enviarVotos(votos),
      props.enviarId(props.nombre)
    );
  };

  const definirCandidato = (candidato) => {
    return (
        candidato === 'javier milei' ? 
        (votosMilei / props.totalVotos) * 100 :
        (votosMassa / props.totalVotos) * 100
    )
  }


  const definirPorcentaje = (candidato) => {
    return (
         candidato === 'javier milei' ? 
        (votosMilei / props.totalVotos) * 100:
        (votosMassa / props.totalVotos) * 100
    )
    
  }

  porcentaje = props.totalVotos === 0 ?
    0 : definirPorcentaje(props.nombre)

  return (
    <div className='contenedor-candidato'>
      <div className="nombre-votos-contenedor">
      <h2 className="nombre-candidato">{props.nombre}</h2>
      <h3 className="votosporpartido">
        {props.nombre === 'javier milei' ? 
        votosMilei : votosMassa} 
        {(votosMilei || votosMassa) > 1 || votosMilei || votosMassa === 0 ? 'votos' : 'voto'}</h3>
      </div>
      <div className="contenedor-partido">
        <button className="contenedor-imagen" onClick={sumarYEnviar}>
          <img className="imagen-partido " src={props.imagen} alt="" />
        </button>
        <div className="contenedor-barraporcentual">
            <h3>{porcentaje.toFixed(2)}%</h3>
          <motion.div     
            className={
              props.nombre === "javier milei"
                ? "barraporcentual lalibertadavanza"
                : "barraporcentual unionporlapatria"
            }
            style={{ width: `${definirCandidato(props.nombre)}%`}}
            initial = {{width : '0%'}}
            transition={{duration : .25 , ease : "backInOut"}}
            animate = {{width : `${porcentaje}%`}}
          ></motion.div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Candidato;
