import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

//import { LOADING, LOADING_DONE, LOADING_ERROR } from '../actions/productListActionTypes'
import Products from './Products'
import { loadingProduct } from '../actions/productListAction'

class ProductsList extends Component{

    componentDidMount(){
        this.props.Load()
    }

    render(){
    return (
        <Fragment>
            <div>
               {
                   this.props.isLoading && <p>Loading</p>
               }
               {
                   this.props.error && <p>{this.props.error}</p>
               }
               {
                   this.props.productList && <Products productList={this.props.productList}/>
               }
            </div>
        </Fragment>
    )}
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.list.isLoading,
        error: state.list.error,
        productList: state.list.productList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Load: () => dispatch(loadingProduct())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)