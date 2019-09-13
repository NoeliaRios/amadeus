import React, { Component } from "react";
import Results from "./components/Results";
import Input from "./components/Input";
import "./App.css";
import Navbar from "./components/Navbar";
// import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleQuery = q => {
    this.setState({
      iataOrigin: q.iataOrigin,
      iataDest: q.iataDest,
      fromDate: q.fromDate,
      toDate: q.toDate,
      adults: q.adults
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Input
          handleQuery={this.handleQuery}
          // handleSubmit={query => this.handleSubmit(q)}
        />
        {/* <p>{JSON.stringify(this.state.fields)}</p> */}
        {this.state ? (
          <Results
            handleQuery={this.handleQuery}
            iataOrigin={this.state.iataOrigin}
            iataDest={this.state.iataDest}
            fromDate={this.state.fromDate}
            toDate={this.state.toDate}
            adults={this.state.adults}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
