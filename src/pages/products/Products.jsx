import React from 'react'

//importing style
import Style from './Products.module.css';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

//importing hooks
import { useState, useEffect } from 'react';

function Products({productList}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {

  }, [])

  return (
    <section className={Style.main}>
        Products
    </section>
  )
}

export default Products