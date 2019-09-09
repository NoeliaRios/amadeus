/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./navbar.scss";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="list">
          <a href="">
            <img
              src="https://screeching-field.surge.sh/images/adantrip.png"
              alt=""
            />
          </a>
          <a href="#">Hotels</a>
          <a href="">Rooms</a>
          <a href="">Flights</a>
          <a href="">Cars</a>
          <a href="">Experiences</a>
        </div>
        <div className="login">
          <a href="">USD</a>
          <a href="">
            <img
              src="https://screeching-field.surge.sh/images/USA.png"
              alt=""
            />
          </a>
          <a href="">My Account</a>
        </div>
      </div>
    );
  }
}

export default Navbar;
