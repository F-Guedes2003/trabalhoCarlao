import React from 'react'

import Style from './Grid.module.css';

export const GridContainer = ({children}) => {
  return (
    <div className={Style.grid}>
        {children}
    </div>
  )
}
