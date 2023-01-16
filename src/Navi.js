import React, { Component } from 'react'

export default class navi extends Component {
  render() {
    return (
      <div>
        <h2>Navi Components</h2>
        <h2>{this.props.title}</h2>
      </div>
    )
  }
}
