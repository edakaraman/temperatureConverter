import React, { Component } from "react";

export default class Celcius extends Component {
  render() {
    return (
        <h5> Celcius: {this.props.celcius} °C </h5>
    );
  }
}
