import React from 'react'

const TextInput = ({label, id, setValue}) => {
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input type='text' id={id} onChange={e => setValue(e.target.value)} />
    </>
  )
}

export default TextInput