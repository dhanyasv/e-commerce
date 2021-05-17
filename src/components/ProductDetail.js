import React, { useEffect,useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { selectedProduct,removeSelectedProduct,addCount } from '../redux/actions/productActions'
import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShopIcon from '@material-ui/icons/Shop';
import LinearProgress from '@material-ui/core/LinearProgress';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  cartbtn: {
      marginRight:20
    },
  category: {
    color:'gray'
  }
}));

const ProductDetail = () => {
    const classes = useStyles();
    const product = useSelector((state) => state.product);
    const count = useSelector((state) => state.count);
    const {id,title,price,description,category,image} = product; 
    const {productId} = useParams();
    const dispatch = useDispatch();
    const addShopCount = () => dispatch(addCount())
    const fetchedProductDetail = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(err)
        });
        dispatch(selectedProduct(response.data));
    }
    useEffect(() => {
        if(productId && productId !==""){
            fetchedProductDetail()
         }
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [productId,dispatch])
    return (
      <>
      {Object.keys(product).length === 0 ? (
        <div className="progress-bar"><LinearProgress /></div> 
      ) : (
        <div className="product-details">
          <div className="product-image">
            <img  className="image-src" src={product.image} alt={product.title} />
          </div>
          <div className="product-info">
          <Typography className="product-title" variant="h6" gutterBottom>
             {product.title}
          </Typography>
          <Typography className={classes.category} variant="caption" display="block" gutterBottom>
             {product.category}
          </Typography>
          <div className="product-price">
          <Typography  variant="h5" gutterBottom>
            $ {product.price}
          </Typography>
          </div>
          <div className="product-rating">
          { [...Array(5)].map(
                (value, index) => (
                <StarIcon  id={index + 1} key={index} />
                )) 
          }
          </div>
          <div className="product-description">
          {product.description}
          {count.count}
          </div>
          <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-native-simple">Quantity</InputLabel>
              <Select
                native
                inputProps={{
                  name: 'Quantity',
                  id: 'quantity',
                }}
              >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </Select>
      </FormControl>
          <div className="product-actions">
            <Button
                onClick={addShopCount}
                variant="contained"
                color="primary"
                startIcon={<ShoppingCartIcon></ShoppingCartIcon>}>Add To Cart
            </Button>
            <span>&nbsp;&nbsp;</span>
            <Button
                variant="contained"
                color="primary"
                startIcon={<ShopIcon></ShopIcon>}>Buy Now
          </Button>
          </div>
          </div>
        </div>
        
      )}
    </>

    )
  }

export default ProductDetail;
