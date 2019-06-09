import { LOADING_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActionTypes'

const initialState = {
    cartItems: [],
    isEmpty: true
}

function cartReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TO_CART:
        
            //find the item in CartItems with same name as Payload and increment quantity by 1
            
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
                isEmpty: false
            }
        case REMOVE_FROM_CART:
            const removeItemList = state.cartItems.filter(item=>
                item.name !== action.payload.name
            )
 
            const checkEmpty = () =>{
                if(removeItemList == null || removeItemList.length === 0){
                    return true
                }else{
                    return false
                }
            }
            return {
                ...state,
                isEmpty: checkEmpty(),
                cartItems: removeItemList
            }

        case LOADING_CART:
            return {
                ...state,
                cartItems: [],
                isEmpty: true
            }
        default:
            return state
    }
}


export default cartReducer