import React, { Component } from "react";
import "./input.scss";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      // query: e.target.value
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const query = this.state.query;
    console.log("los datos son", this.state);

    this.props.handleQuery(query);
  };
  render() {
    return (
      <div className="input-container">
        <h1>Cheap Flights Best Deals</h1>
        <h4>Search hundreds of travel sites at once</h4>
        <form>
          <input
            name="iataOrigin"
            type="text"
            placeholder="Departure"
            value={this.state.departure}
            onChange={this.handleInputChange}
          ></input>
          <input
            name="iataDest"
            type="text"
            placeholder="Arrival"
            value={this.state.arrival}
            onChange={this.handleInputChange}
          ></input>
          <input
            name="fromDate"
            type="date"
            placeholder="dd/mm/yyyy"
            value={this.state.date}
            onChange={this.handleInputChange}
          ></input>
          <input
            name="toDate"
            type="date"
            placeholder="dd/mm/yyyy"
            value={this.state.date}
            onChange={this.handleInputChange}
          ></input>
          <input
            name="adults"
            type="number"
            placeholder="1"
            value={this.state.passengers}
            onChange={this.handleInputChange}
          ></input>

          <button type="submit" onClick={this.handleSubmit}>
            Ir
          </button>
        </form>
      </div>
    );
  }
}

export default Hero;
