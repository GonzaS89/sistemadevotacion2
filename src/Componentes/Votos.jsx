import React from 'react';
import '../Estilos/votos.css'

const Votos = (props) => {
    return (
        <div className='boleta-container'>
            <img src={props.boleta} alt="" />
        </div>
    )
}

export default Votos