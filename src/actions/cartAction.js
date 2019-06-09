import { ADD_TO_CART, REMOVE_FROM_CART, LOADING_CART } from './cartActionTypes'

export const addToCart = (item) =>{
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (item) =>{
    return{
        type:REMOVE_FROM_CART,
        payload: item
    }
}

export const loadCart = () =>{
    return {
        type: LOADING_CART
    }
}