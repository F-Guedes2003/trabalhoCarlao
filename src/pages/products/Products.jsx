import React from 'react'

//importing style
import Style from './Products.module.css';

//importing hooks
import { useState, useEffect } from 'react';

//importing components

function Products({productList}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(productList);
  }, [productList])

  return (
    <section className={Style.main}>
        <h2>Products</h2>
    </section>
  )
}

export default Products