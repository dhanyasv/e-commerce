import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import Product from './Product';
import Grid from '@material-ui/core/Grid';

const ProductList = () => {
    const products = useSelector((state) => state.allProducts.products);
    const [loading,setLoadingState] = useState(true);
    const dispatch = useDispatch();
    const fetchedProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log(err)
        });
        if(response.data){
            setLoadingState(false);
        }
        dispatch(setProducts(response.data));
    }
    useEffect(() => {
        fetchedProducts()
    }, [])
    return (
            <>
            {
            loading && <h2>LOADING</h2>
            }
            <Grid container spacing={2}>
                <Grid item xs={1} sm={1} />
                <Grid item xs={10} sm={10}>
                <Grid container spacing={2}><Product /></Grid>
                    </Grid>
                <Grid item xs={1} sm={1} />
            </Grid>

         </>
    
    )
}

export default ProductList
