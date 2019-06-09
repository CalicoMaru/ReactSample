import { LOADING, LOADING_DONE, LOADING_ERROR } from '../actions/productListActionTypes'

const initialState = {
    isLoading: true,
    productList: null,
    error: null
}

function productListReducer(state = initialState, action) {

    switch (action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
                 
            }
        case LOADING_DONE:
            return {
                ...state,
                isLoading: false,
                productList: action.payload,
                error: null
                
            }
        case LOADING_ERROR:
            return {
                ...state,
                isLoading: false,
                productList: null,
                error: action.payload
               
            }
        default: 
            return state
    }

}

export default productListReducer