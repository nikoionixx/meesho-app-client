import { ProductActionTypes } from '../../constants/product/products.types';

const initialState = {}

const ProductReducer = (state = initialState ,{type,payload}) => {
    switch(type){
        case ProductActionTypes.SET_PRODUCTS : 
        return {...state,allProducts : payload}
        case ProductActionTypes.SET_PRODUCT : 
        return {...state,currentProduct : payload}
        default:
        return state;
    }
}

export default ProductReducer;