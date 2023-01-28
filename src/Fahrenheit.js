import React, { Component } from 'react'

export default class Fahrenheit extends Component {
  render() {
    return (
      <h5> Fahrenheit: {this.props.fahrenheit} °F </h5>
    )
  }
}

