import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import Product from './Product';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop:20
      }
}));

const ProductList = () => {
    const classes = useStyles();
    const products = useSelector((state) => state.allProducts.products);
    const [loading,setLoadingState] = useState(false);
    const dispatch = useDispatch();
    const fetchedProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log(err)
        });
        if(response.data){
            setLoadingState(false);
            dispatch(setProducts(response.data));
        }
    }
    useEffect(() => {
        fetchedProducts()
    }, [])
    return (
            <>
            {
            loading &&      <div className="progress-bar"><LinearProgress /></div> 

            }
            <Grid container className={classes.root}>
                <Grid item xs={1} sm={1} />
                <Grid item container xs={10} sm={10} spacing={1}>
                        <Product />
                </Grid>
                <Grid item xs={1} sm={1} />
            </Grid>

         </>
    
    )
}

export default ProductList
