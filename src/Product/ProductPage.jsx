import React from 'react'
import "../assets/css/Product.css";
import ProductData from './ProductData';
import HOC from '../HOC';
import { Link } from 'react-router-dom';

function ProductPage() {
    return (
        <>
            <div className='landing_color  d-flex justify-content-center align-items-center text-dark'>
                <div className='fw-bold fs-5  container text-center'><Link to={"/"} className='text-decoration-none  text-success'>Home</Link> / Product</div>
            </div>
            <ProductData />
        </>
    )
}

export default HOC(ProductPage)