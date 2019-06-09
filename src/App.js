import React, { Component } from 'react'

import ProductList from './components/ProductsList'
import Cart from './components/Cart'
import Fruit from './components/Fruit'

export default class App extends Component {

  data = {
    id: null,
    name:"Orange",
    price:19.99,
    quantity:200,
    productDescription: "Mandarin"
  }

  componentDidMount() {

    fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(data => {
        console.log(data, 'App fetching')
      })

    // fetch("http://localhost:8080/products/add",
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(this.data),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(res => res.json())
    //   .then(response => console.log('Success:', JSON.stringify(response)))
    //   .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div>
        <Fruit/>
        <Cart />
        <ProductList />
      </div>
    )
  }
}
