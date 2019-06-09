import React, { Component, Fragment } from 'react'

export default class Test extends Component {

  state = {
    item:{
      id:'',
      title:''
    },
    items:[
      {id:1, title:'nmsl1'},
      {id:2, title:'nmsl2'},
      {id:3, title:'nmsl3'},
      {id:4, title:'nmsl4'},
      {id:5, title:'nmsl5'}
    ]
  }

  onClickHandle = (e) => {
    var text = e.currentTarget.textContent
    var test = this.state.items.filter((item) => (
      item.title !== text
    ))
    this.setState({
      items: test
    })
  }

  onChangeHandle = (e) => {
    this.setState({
      item: { [e.target.name]: e.target.value}
    })
  }

  onSubmitHandle = (e) => {
    e.preventDefault();
    const item = {
      title: this.state.item.title
    }

    this.setState({
     items: [ ...this.state.items,
      item],
      item:{title:''}
    })

  }

  clearForm = () => {
    this.setState({
      items:[]
    })
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.onSubmitHandle}>
          <label>
            title:
          <input type="text" name="title" placeholder="title" value={this.state.item.title} onChange={this.onChangeHandle}/>
          </label>
         
          <input type="submit" value="Submit"></input>
        </form>
      <div>
        {
          this.state.items.map((item,index) =>(
            <li id={item.id} value={index} key={index} onClick={this.onClickHandle}>{item.title}</li>
            
          ))
        }
      </div>
      <button onClick={this.clearForm}>Clear</button>
      </Fragment>
      
    )
  }
}
