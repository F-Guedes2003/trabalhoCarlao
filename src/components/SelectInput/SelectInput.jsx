import Style from './SelectInput.module.css'


const SelectInput = ({options, label, setValue, value}) => {

return (
    <>
        <label> {label} </label>
        <select className={Style.select} value={value} onChange={e => setValue(e.target.value)}>

            {options.map((item, index) => <option key={index} value={item.value} >{item.name}</option>)}
        
        </select>
    </>
  )
}

export default SelectInput