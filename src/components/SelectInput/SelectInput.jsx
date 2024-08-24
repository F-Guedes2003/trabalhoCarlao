import React, { useEffect } from 'react'

const SelectInput = ({options, label, setValue}) => {

return (
    <>
        <label> {label} </label>
        <select onChange={e => setValue(e.target.value)}>

            {options.map((item, index) => <option key={index} value={item.name} >{item.name}</option>)}
        
        </select>
    </>
  )
}

export default SelectInput