
//importig hooks
import { useState } from 'react'

//importing styles
import Style from './Form.module.css'

//importing components
import TextInput from '../TextInput/TextInput';
import SelectInput from '../SelectInput/SelectInput';
import NumberInput from '../NumberInput/NumberInput'

function Form({brands, sections, getName, getPrice, getState, getSection, getBrand, getImage}) {
    const [section, setSection] = useState('');
    const [brand, setBrand] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [state, setState] = useState('');

    function handleSubmit(e){
        e.preventDefault();

        getName(name);
        getPrice(price);
        getState(state);
        getSection(section);
        getBrand(brand);
        setState(state);
        
        setBrand('');
        setName('');
        setPrice('');
        setSection('');
        setState('');
    }

    return (

    <form className={Style.form} onSubmit={handleSubmit}>

        <SelectInput label={"Seção"} options={sections} value={section} setValue={setSection}/>

        <SelectInput label={"Marcas"} options={brands} value={brand} setValue={setBrand}/>

        <TextInput label="Nome" id='name' value={name} setValue={setName} />

        <NumberInput id='price' label='Preço' value={price} setValue={setPrice}/>

        <label htmlFor='state' id='state'>Estado: </label>
        <div id='state'>
            <label htmlFor="new">Novo</label>
            <input id='new' type="radio" name='state' onChange={e => setState(e.target.value)} value='new'/>
            
            <label htmlFor='used'>Usado</label>
            <input type="radio" name='state' onChange={e => setState(e.target.value)} value='used'/>
        </div>

        <button>Submit</button>

    </form>
  )
}

export default Form