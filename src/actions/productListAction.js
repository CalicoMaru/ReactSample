import {LOADING, LOADING_DONE, LOADING_ERROR } from './productListActionTypes' 

export const loadingProduct = () => {
    return {
        type: LOADING
    }
}
export const loadingProductDone = (products) =>{
    return {
        type: LOADING_DONE,
        payload:products
    }
}
export const loadingProductError = (error) =>{
    return {
        type: LOADING_ERROR,
        payload: error
    }
}