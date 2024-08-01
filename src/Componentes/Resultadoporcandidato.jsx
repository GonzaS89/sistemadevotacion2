import { React, useState } from "react";
import { motion } from 'framer-motion';
import "../Estilos/candidato.css";


const Resultadoporcandidato = (props) => {

  const [votos, setVotos] = useState(0);

  const aumentarVotos = () => {
    setVotos(votos + 1);
  };

  let porcentaje;

  const sumarYEnviar = () => {
    return (
      aumentarVotos(),
      // validarId(),
      // props.enviarVotos(votos),
      props.enviarId(props.nombre)
    );
  };

  const definirCandidato = (candidato) => {
    return (
      candidato === 'javier milei' ?
        (props.votosMilei / props.totalVotos) * 100 :
        (props.votosMassa / props.totalVotos) * 100
    )
  }


  const definirPorcentaje = (candidato) => {
    return (
      candidato === 'javier milei' ?
        (props.votosMilei / props.totalVotos) * 100 :
        (props.votosMassa / props.totalVotos) * 100
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
            props.votosMilei : props.votosMassa} {(props.votosMilei || props.votosMassa) > 1 || props.votosMilei || props.votosMassa === 0 ? 'votos' : 'voto'}</h3>
      </div>
      <div className="contenedor-partido">
        <button className="contenedor-imagen" onClick={sumarYEnviar}>
          <img className="imagen-partido " src={props.imagen} alt="" />
        </button>
        <div className="contenedor-barraporcentual">
          <h3>{porcentaje.toFixed(0)}%</h3>
          <motion.div
            className={
              props.nombre === "javier milei"
                ? "barraporcentual lalibertadavanza"
                : "barraporcentual unionporlapatria"
            }
            style={{ width: `${definirCandidato(props.nombre)}%` }}
            initial={{ width: '0%' }}
            transition={{ duration: .25, ease: "backInOut" }}
            animate={{ width: `${porcentaje}%` }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resultadoporcandidato;
