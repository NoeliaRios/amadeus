import React, { Component } from "react";
import "./input.scss";

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="res_items">
        <p>{this.props.data.id}</p>
        <p>{this.props.data.price.base}</p>
      </div>
    );
  }
}

export default ResultItem;
