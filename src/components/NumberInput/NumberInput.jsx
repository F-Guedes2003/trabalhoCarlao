import React from 'react'

const NumberInput = ({label, id, setValue}) => {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input type='number' id={id} min={0} onChange={e => setValue(e.target.value)} />
    </>
  )
}

export default NumberInput