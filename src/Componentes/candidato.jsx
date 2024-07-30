import { React, useState, useEffect } from "react";
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

  const [porcentaje, setPorcentaje] = useState(0);

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
        ((votosMilei / props.totalVotos) * 100).toFixed(2) :
        ((votosMassa / props.totalVotos) * 100).toFixed(2)
    )
  }

  return (
    <div className="contenedor-candidato">
      <h2 className="nombre-candidato">{props.nombre}</h2>
      <div className="contenedor-partido">
        <button className="contenedor-imagen" onClick={sumarYEnviar}>
          <img className="imagen-partido " src={props.imagen} alt="" />
        </button>
        <div className="contenedor-barraporcentual">
          <span
            className={
              props.nombre === "javier milei"
                ? "barraporcentual lalibertadavanza"
                : "barraporcentual unionporlapatria"
            }
            style={{ width: `${definirCandidato(props.nombre)}%`}}
          ></span>
        </div>
        <h3>{definirPorcentaje(props.nombre)}%</h3>
        
      </div>
      <h3>Votos: {props.nombre === 'javier milei' ? votosMilei : votosMassa}</h3>
    </div>
  );
};

export default Candidato;
