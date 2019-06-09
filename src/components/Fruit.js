import React, { Component, Fragment } from 'react'

export default class Fruit extends Component {

    state = {
        fruits: [],
        formData: {
            id: null,
            name: '',
            price: '',
            quantity: '',
            productDescription: '',
            inStock: true
        }
    }



    componentDidMount() {

        fetch("http://localhost:8080/products")
            .then(res => res.json())
            .then(data => {
                this.setState({ fruits: data })
            })
    }

    handleChange = (e) => {

        if ([e.target.name] == 'price' || [e.target.name] == 'quantity') {
            if (isFinite(e.target.value)) {

                this.setState({
                    formData: {
                        ...this.state.formData,
                        [e.target.name]: e.target.value
                    }
                })
            } else {
                alert('Must Be Number')
            }

        } else {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [e.target.name]: e.target.value
                }
            })
        }

    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8080/products/add",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.formData)
            }
        ).then(res => res.json())
            .then(response => console.log('Success:', response.json()))
            .catch(error => console.error('Error:', error));
    }

    render() {
        return (
            <Fragment>
                <div>
                    <h1>Fruits</h1>
                    {
                        this.state.fruits.map((item, index) => (
                            <Fragment key={index}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>&#0036;{item.price}</td>
                                            <td>{item.quantity}</td>
                                            <td>{item.productDescription}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Fragment>
                        ))
                    }
                </div>
                <div>
                    <h1>Add Fruit</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" value={this.state.formData.name} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Price</label>
                            <input type="text" name="price" value={this.state.formData.price} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Quantity</label>
                            <input type="text" name="quantity" value={this.state.formData.quantity} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Description</label>
                            <textarea name="productDescription" value={this.state.formData.productDescription} onChange={this.handleChange} />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </Fragment>

        )
    }
}
