import React from 'react'

import Style from './Card.module.css'

const Card = ({name, price, state, brand, imagePath = ''}) => {
  return (
    <div className={Style.card}>
        
        
        { brand === 'xingLing' && <img src='/images/xingLing.jpeg' alt={name} />}
        
        { brand === 'hp' && <img src='/images/hp.svg.png' alt={name} />}

        { brand === 'dell' && <img src='/images/dell.jpg' alt={name} />}

        { brand === 'asus' && <img src='/images/asus.jpg' alt={name} />}

        { brand === 'positivo' && <img src='/images/positivo.jpg' alt={name} />}

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