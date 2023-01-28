import React, { Component } from 'react'

export default class InitialDegree extends Component {
  render() {
    return (
      <div>
        <h6>Current temperature: {this.props.initDegree} degrees</h6>
      </div>
    )
  }
}