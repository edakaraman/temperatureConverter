import React, { Component } from 'react'

export default class Kelvin extends Component {
  render() {
    return (
      <h5> Kelvin: {this.props.kelvin} °K</h5>
    )
  }
}