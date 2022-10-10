import { ProductActionTypes } from '../constants/product/products.types';

export const setProducts = (products) => {

    return {
        type : ProductActionTypes.SET_PRODUCTS,
        payload : products
    }
}

export const setProduct = (product) => {
    return {
        type : ProductActionTypes.SET_PRODUCT,
        payload: product
    }
}