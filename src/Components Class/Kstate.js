import React, { Component } from 'react'

export default class Kstate extends Component {
    constructor(){
        super();
        this.state={
            name: 'karamveer',
            Email: 'k@gmail.com' ,
            Count: 0
        }
    }

    updatestate()
     {
this.setState({
    name: '--Karamveer Singh--',
    Email: '--karamveer@gmail.com--',
     Count: this.state.Count+1
     
     
})

    }

  render() {
    console.log('render')
    return (
      <div className='container'>

        <h1>State in Class component</h1>
        <h1>Name: {this.state.name}</h1>
        <h1>Email: {this.state.Email}</h1>
        <h1>Count:{this.state.Count}</h1>

        <button  onClick={()=> {this.updatestate()}} className="btn btn-primary">Update Button</button>
      </div>
    )
  }
}
