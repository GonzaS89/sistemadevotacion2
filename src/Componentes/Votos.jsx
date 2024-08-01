import React from 'react';
import '../Estilos/votos.css'

const Votos = (props) => {

    const enviarVotos = () => {
        return (props.enviarId(props.nombreCandidato))
    }

    return (
        <div className='boleta-container'>
            <img 
            onClick={()=>enviarVotos(props.children)}
            src={props.boleta} alt="" />
        </div>
    )
}

export default Votos