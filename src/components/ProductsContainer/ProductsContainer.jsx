import React from 'react'

//importing Style
import Style from './ProductsContainer.module.css';

//importing components


//importing hooks
import { useState, useEffect } from 'react';

const ProductsContainer = ({title, productList}) => {

    useEffect(() => {
        console.log(productList);
    }, [productList])

    return (
    <div className={Style.container}>
        <h3>{title}</h3>

        { productList.length > 0 ? productList.map((item, index) => {
            
        }) : (<p>Nenhum produto ainda</p>) }        
    </div>
  )
}

export default ProductsContainer