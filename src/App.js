import React, { Component } from "react";
import Celcius from "./Celcius";
import Fahrenheit from "./Fahrenheit";
import InitialDegree from "./InitialDegree";
import Kelvin from "./Kelvin";
import { Container, Row, Col,Button } from "reactstrap";

class App extends Component {
  state = {
    initDegree: 0,
    celcius: 0,
    fahrenheit: 32,
    kelvin: 273.15,
  };

  increaseValue = (degree) => {
    this.state.initDegree = degree + 1;
    this.setState({ celcius: this.state.initDegree });
    this.setState({ fahrenheit: (this.state.initDegree * 9) / 5 + 32 });
    this.setState({ kelvin: this.state.initDegree + 273.15 });
  };
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h2> Hava Nasıl </h2>
              <InitialDegree initDegree={this.state.initDegree} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                color="secondary"
                onClick={() => this.increaseValue(this.state.initDegree)}
              >
                Sıcaklık Arttır
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5> 3 Birimde Sıcaklık Ölçümü </h5>
            </Col>
          </Row>
          <Row>
            <Col xs="4">
              <Celcius celcius={this.state.celcius} />
            </Col>
            <Col xs="4">
              <Fahrenheit fahrenheit={this.state.fahrenheit} />
            </Col>
            <Col xs="4">
              <Kelvin kelvin={this.state.kelvin} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
