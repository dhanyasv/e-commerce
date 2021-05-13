import { combineReducers } from 'redux';
import  { productReducer,selectedProductReducer,addedProductCountReducer}  from './productReducer';

const reducers = combineReducers({
    allProducts : productReducer,
    product:selectedProductReducer,
    count:addedProductCountReducer
});

export default reducers;