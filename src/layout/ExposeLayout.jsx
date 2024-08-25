import React from 'react'

import Style from './Grid.module.css';

const ExposeLayout = ({children}) => {
  return (
    <div className={Style.container}>
        {children}
    </div>
  )
}

export default ExposeLayout