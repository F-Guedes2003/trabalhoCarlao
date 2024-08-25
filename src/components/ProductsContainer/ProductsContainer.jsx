import React from 'react'

//importing Style
import Style from './ProductsContainer.module.css';

//importing components
import ExposeLayout from '../../layout/ExposeLayout';
import Card from '../Card/Card';

//importing hooks
import { useState, useEffect } from 'react';

const ProductsContainer = ({title, productList}) => {

    useEffect(() => {
        console.log(productList);
    }, [productList])

    return (
    <div className={Style.container}>
        <h3>{title}</h3>

        {productList.length > 0 ?

            <ExposeLayout>
                {productList.map((item, index) => {
                    return <Card key={index} name={item.name} brand={item.brand} state={item.state} price={item.price}/>})}
            </ExposeLayout>

        : (<p>Não há nenhum produto</p>)}
    </div>
  )
}

export default ProductsContainer