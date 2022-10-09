import { ProductActionTypes } from '../../constants/product/products.types';

const initialState = {}

const ProductReducer = (state = initialState ,{type,payload}) => {
    switch(type){
        case ProductActionTypes.SET_PRODUCTS : 
        return {...state,allProducts : payload}
        default:
        return state;
    }
}

export default ProductReducer;