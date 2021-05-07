import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';
import '../css/Product.css';

const Product = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id,title,price,description,category,image} = product;
        return(
            <Grid item xs={12} sm={3} key={id}>
                <Link to={`product/${id}`}>
                <ProductCard {...product} />
                </Link>
            </Grid>
               
        )
    })
    return (
        <>
            {renderList}
        </>
    )
}

export default Product
