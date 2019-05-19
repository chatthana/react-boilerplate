import React, { Component } from 'react';
import {
  Row,
  Col,
  Button
} from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <Row className="my-3">
        <Col md="6">
          <h3>Welcome to Reactorniser</h3>
          <p>
            This application boilerplate utilises <strong>Webpack 4, Babel 7</strong>, and many more libraries
            We are working hard to optimise the performance of the boilerplate. CHEERS!!!
          </p>
          <p><strong>Emilyn Mason - Author</strong></p>
          <Button>Buy me some beers!</Button>
          <Button color="danger" style={{marginLeft: '5px'}}>View Documentation</Button>
        </Col>
        <Col className="text-center">
          <img style={{width: "280px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png" />
        </Col>
      </Row>
    );
  }
}
  