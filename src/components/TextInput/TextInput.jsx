import React from 'react'

import Style from './TextInput.module.css'

const TextInput = ({label, id, setValue}) => {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input className={Style.input} type='text' id={id} onChange={e => setValue(e.target.value)} />
    </>
  )
}

export default TextInput