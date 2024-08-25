import React from 'react'

import Style from './Grid.module.css';

const Grid = ({children}) => {
  return (
    <div className={Style.grid}>
        {children}
    </div>
  )
}

export default Grid