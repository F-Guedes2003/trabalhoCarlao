import React from 'react'

import Style from './Card.module.css'

const Card = ({imagePath, name, price}) => {
  return (
    <div className={Style.card}>
        
        <img src={imagePath} alt={name} />

        <h4>{name}</h4>

        <p>R${price}</p>

    </div>
  )
}

export default Card