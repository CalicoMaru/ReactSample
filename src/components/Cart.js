import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadCart, addToCart, removeFromCart } from '../actions/cartAction'

class Cart extends Component {

    componentDidCatch() {
        this.props.LoadCart()
    }

    render() {
        console.log(this.props.cartItems)
        return (
            <div>
                <h1>Cart:</h1>
                {
                    this.props.isEmpty
                        ? <p>You have an empty cart!</p>
                        : this.props.cartItems.map(
                            (item, index) => (

                                item.quantity !== 0

                            ) &&
                                (<div key={index}><p>{item.name}</p><p>{item.quantity}</p>
                                    <button onClick={() => this.props.RemoveFromCart(item)}>Remove</button>
                                </div>)

                        )
                }

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems,
        isEmpty: state.cart.isEmpty
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LoadCart: () => dispatch(loadCart()),
        RemoveFromCart: (item) => dispatch(removeFromCart(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)