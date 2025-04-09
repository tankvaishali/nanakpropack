import React from 'react'
import "../assets/css/Product.css";
import ProductData from './ProductData';
import HOC from '../HOC';

function ProductPage() {
    return (
        <>
            <ProductData />
        </>
    )
}

export default HOC(ProductPage)