import React from 'react'

import Style from './NumberInput.module.css';

const NumberInput = ({label, id, setValue}) => {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input className={Style.input} type='number' id={id} min={0} onChange={e => setValue(e.target.value)} />
    </>
  )
}

export default NumberInput