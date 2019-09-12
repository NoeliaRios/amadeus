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

  render() {
    return (
      <div className="App">
        <Navbar />
        <Input
          handleQuery={this.handleQuery}
          // handleSubmit={query => this.handleSubmit(q)}
        />
        {/* <p>{JSON.stringify(this.state.fields)}</p> */}
        {this.state ? <Results handleQuery={this.handleQuery} /> : null}
      </div>
    );
  }
}

export default App;
