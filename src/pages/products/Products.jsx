import React from 'react'

//importing style
import Style from './Products.module.css';

//importing hooks
import { useState, useEffect } from 'react';

//importing components
import ProductsContainer from '../../components/ProductsContainer/ProductsContainer';

function Products({productList}) {

  const [computers, setComputers] = useState([]);
  const [gaming, setGaming] = useState([]);
  const [printers, setPrinters] = useState([]);
  const [gadgets, setgadgets] = useState([]);
  const [acessories, setAcessories] = useState([]);
  
  useEffect(() => {

    const computerList = productList.filter(item => {
      if(item.section === 'computers') return item;
      else return false
    })

    const gamingList = productList.filter(item => {
      if(item.section === 'games') return item;
      else return false
    })

    const printerList = productList.filter(item => {
      if(item.section === 'printers') return item;
      else return false
    })

    const gadgetList = productList.filter(item => {
      if(item.section === 'gadgets') return item
      else return false
    })

    const acessoryList = productList.filter(item => {
      if(item.section === 'acessories') return item;
      else return false
    })

    setComputers(computerList);
    setGaming(gamingList);
    setPrinters(printerList);
    setgadgets(gadgetList);
    setAcessories(acessoryList);

  }, [productList])

  return (
    <section className={Style.main}>
        <h2>Products</h2>

        <ProductsContainer title="Computers" productList={computers}/>

        <ProductsContainer title="Games" productList={gaming}/>
 
        <ProductsContainer title="printers" productList={printers}/>

        <ProductsContainer title="Gadgets" productList={gadgets}/>

        <ProductsContainer title="Acessories" productList={acessories}/>
    </section>
  )
}

export default Products