import React, { Component } from 'react'

export default class KEvent extends Component {
    testfun = () => {
        alert('hello evenets')
        console.log('hello events')
    }
  render() {
    return (
      <div>
        <h1>Evenets Handling</h1>
        <button onClick={() => this.testfun()}>Clicked </button>
      </div>
    )
  }
}
