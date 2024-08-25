import React from 'react'

import Style from './Card.module.css'

const Card = ({imagePath, name, price, state, brand}) => {
  return (
    <div className={Style.card}>
        
        <img src={imagePath} alt={name} />
        
        <div className={Style.details}>
            <h4>{name}</h4>
            <p className={Style.state}>{brand}</p>
            <p>R${price}</p>
            <p className={Style.state}>{state}</p>
        </div>
    
    </div>
  )
}

export default Card