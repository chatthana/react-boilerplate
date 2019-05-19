import React, { Component } from 'react';
import {
  Row,
  Col,
  Button
} from 'reactstrap';

export default class About extends Component {
  render() {
    return (
      <Row className="my-3">
        <Col md="6">
          <h3>About us</h3>
          <p>
            We are a small team that works mostly with JavaScript. Thus we try to find
            the ways to optimise the performance of React applications by building this
            boilerplate.
          </p>
        </Col>
      </Row>
    );
  }
}
  