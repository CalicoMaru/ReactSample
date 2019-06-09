import React from 'react'
import { connect } from 'react-redux';

import { addToCart } from '../actions/cartAction'

function Products(props) {
    return (
        <div>
            <h1>Products List</h1>
            {
                props.productList.map((item, index)=>(
                    <div key= {index}>
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <button onClick={()=>props.addToCarts({name:item.name})}>Add to cart</button>
                    </div>
                ))
            }
        </div>
    )
}
const mapStateToProps = (state) =>{
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addToCarts: (item)=> dispatch(addToCart(item))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)