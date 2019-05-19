import React, { Component } from 'react';
import {
  Container
} from 'reactstrap';
import NavigationBar from '../partials/NavigationBar';

export default class AppLayout extends Component {

  render() {

    const { children } = this.props;

    return (
      <Container>
        <NavigationBar />
        {children}
      </Container>
    )
  }
}