import React, { useEffect,useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { selectedProduct,removeSelectedProduct } from '../redux/actions/productActions'
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const count = useSelector((state) => state.count);
    const {id,title,price,description,category,image} = product; 
    const {productId} = useParams();
    const dispatch = useDispatch();
    const addCount = useCallback(() => dispatch(addCount()),[dispatch])
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
          </div>
          <div className="product-actions">
            <div className="add-cart-btn">
            <Button
                onClick={addCount}
                variant="contained"
                color="primary"
                endIcon={<AddShoppingCartIcon></AddShoppingCartIcon>}>Add To Cart
            </Button>
            </div>
            <div className="add-cart-btn">
            <Button
                variant="contained"
                color="secondary"
                endIcon={<FavoriteIcon></FavoriteIcon>}>Add To Favourites
          </Button>
            </div>
          </div>
          </div>
        </div>
        
      )}
    </>

    )
  }

export default ProductDetail;
