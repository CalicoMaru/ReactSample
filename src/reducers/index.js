import {combineReducers} from 'redux'

import productListReducer from './productsListReducer'
import productReducer from './productReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    list: productListReducer,
    product: productReducer,
    cart: cartReducer
})

export default rootReducer