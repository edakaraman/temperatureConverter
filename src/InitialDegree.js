import React, { Component } from 'react'

export default class InitialDegree extends Component {
  render() {
    return (
      <div>
        <h6>Şu an sıcaklık: {this.props.initDegree} derece</h6>
      </div>
    )
  }
}