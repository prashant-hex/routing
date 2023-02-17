import React, { Component } from "react";

export default class HideShow extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        {
          this.state.show 
          ? <h1>Hide and show</h1>
          : null
          }
        <button onClick={() => this.setState({show: !this.state.show})}>Clicked Me</button>
      </div>
    );
  }
}
