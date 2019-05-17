import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

export default class AppLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !!this.state.isOpen
    });
  }

  render() {
    return (
      <Container>
        <Navbar light color={`light`} expand={`md`}>
          <NavbarBrand href="/">React 2019</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Explore</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {this.props.children}
      </Container>
    )
  }
}