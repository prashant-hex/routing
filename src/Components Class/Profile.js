import React, { Component } from 'react'

export default class Profile extends Component {
constructor(props)
{
    super()
}

componentDidMount(){
    console.warn('hello componentdidmount')
}

  render() {
    return (
      <div>
        <h1>Hello {this.props.text}</h1>
      </div>
    )
  }
}
