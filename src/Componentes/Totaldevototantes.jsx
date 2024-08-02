import React from 'react'
import { motion } from 'framer-motion';


const Totaldevotantes = (props) => {
    return (
        <div className='contador-caja'>Total de votantes : 
          <motion.div className='contador-contenedor'
          key={props.totalVotos}
          initial={{ opacity: 0, y: 50 , scale : 0}}
          animate={{ opacity: 1, y: 0 , scale : 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: .1 }}>{props.totalVotos}</motion.div> {props.totalVotos > 1 || props.totalVotos === 0  ? 'Electores' : 'Elector'}
          </div>
    )
}

export default Totaldevotantes;
