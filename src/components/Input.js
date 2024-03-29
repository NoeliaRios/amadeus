import React, { Component } from "react";
import "./input.scss";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iataOrigin: "",
      iataDest: "",
      fromDate: "",
      toDate: "",
      adults: "",
      didSearch: false
    };
  }

  handleInputChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.setState({
    //   didSearch: true
    // });
    console.log("los datos son", this.state);

    this.props.handleQuery(this.state);
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
            value={this.state.iataOrigin}
            onChange={this.handleInputChange}
          ></input>
          <input
            name="iataDest"
            type="text"
            placeholder="Arrival"
            value={this.state.iataDest}
            onChange={this.handleInputChange}
          ></input>
          <input
            name="fromDate"
            type="date"
            format="yyyy-mm-dd"
            placeholder="yyyy/mm/dd"
            value={this.state.fromDate}
            onChange={this.handleInputChange}
          ></input>
          <input
            name="toDate"
            type="date"
            placeholder="yyyy/mm/dd"
            value={this.state.toDate}
            onChange={this.handleInputChange}
          ></input>
          <input
            name="adults"
            type="number"
            placeholder="1"
            value={this.state.adults}
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

export default Input;
