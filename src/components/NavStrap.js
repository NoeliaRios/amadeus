import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
  //   UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem
} from "reactstrap";
import "./navstrap.scss";

class NavStrap extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img
              src="https://screeching-field.surge.sh/images/adantrip.png"
              alt=""
            ></img>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Hotels</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Rooms</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Flights</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Cars</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">Experiences</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">USD</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">
                  <img
                    src="https://screeching-field.surge.sh/images/USA.png"
                    alt=""
                  />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">My Account</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavStrap;
