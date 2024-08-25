import React from 'react'

//importing Style
import Style from './ProductsContainer.module.css';

//importing components
import Grid from '../../layout/Grid';
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

            <Grid>
                {productList.map((item, index) => {
                    return <Card key={index} name={item.name} state={item.state} price={item.price}/>})}
            </Grid>

        : (<p>Não há nenhum produto</p>)}
    </div>
  )
}

export default ProductsContainer