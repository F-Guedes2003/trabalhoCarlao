import React from 'react'

import Style from './NumberInput.module.css';

const NumberInput = ({label, id, setValue, value}) => {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input className={Style.input} type='number' value={value} id={id} min={0} onChange={e => setValue(e.target.value)} />
    </>
  )
}

export default NumberInput