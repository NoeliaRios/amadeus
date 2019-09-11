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
      iataOrigin: "",
      iataDest: "",
      fromDate: "",
      toDate: "",
      adults: ""
    });
  };

  handleSubmit = f => {
    this.setState({});
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Input
          handleQuery={this.handleQuery}
          handleSubmit={fields => this.handleSubmit(fields)}
        />
        {/* <p>{JSON.stringify(this.state.fields)}</p> */}
        {this.state ? (
          <Results
            handleSubmit={this.handleSubmit}
            query={this.state.handleQuery}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
