import React, { useEffect } from 'react'
import Style from './NewProduct.module.css';
import Form from '../../components/Form/Form';

//importing hooks
import { useState } from 'react';


function NewProduct({brandHandler, sectionHandler, nameHandler, priceHandler, stateHandler}) {

  const [section, setSection] = useState('');
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    
    sectionHandler(section);
    brandHandler(brand);
    nameHandler(name);
    priceHandler(price);
    stateHandler(state);

  }, [section, brand, name, price, state])

  const brands = [
    {name: "selecione uma marca", value: null}, { name: 'HP', value: 'hp' }, { name: 'DELL', value: 'dell' }, 
    { name: 'Positivo', value: 'positivo' }, { name: 'Asus', value: 'asus' }, 
    { name: 'Xing Ling genérico', value: 'xingLing' }
  ]
    
  const sections = [
    {name: "selecione uma seção", value: null}, { name: 'Computadores', value: 'computers' }, 
    { name: 'Acessórios', value: 'acessories' }, { name: 'Impressoras', value: 'printers' }, 
    { name: 'Games', value: 'games' }, { name: 'Gadgets', value: 'gadgets' }
  ]

  return (
    <section className={Style.main}>

      <h2>Cadastre seu Produto</h2>

      <Form brands={brands} sections={sections} getBrand={setBrand} getSection={setSection} getName={setName}
      getPrice={setPrice} getState={setState} />
    
    </section>
  )
}

export default NewProduct