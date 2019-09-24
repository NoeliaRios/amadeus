import React, { Component } from "react";
import Results from "./components/Results";
import Input from "./components/Input";
import "./App.css";
import NavStrap from "./components/NavStrap";
// import {BrowserRouter as Router, Route } from 'react-router-dom';

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
      adults: q.adults,
      didSearch: true
    });
  };

  render() {
    return (
      // <Router>
      //   <div>
      //     <Route path="/" exact strict component={NavStrap} />
      //     <Route path="/results" exact strict render={() => (
      //       this.state.didSearch ? (<Results handleQuery={this.handleQuery}
      //         iataOrigin={this.state.iataOrigin}
      //         iataDest={this.state.iataDest}
      //         fromDate={this.state.fromDate}
      //         toDate={this.state.toDate}
      //         adults={this.state.adults}
      //       />) : null))}

      // </div>
      // </Router>

      <div className="App">
        <NavStrap />
        <Input handleQuery={this.handleQuery} />
        {this.state.didSearch ? (
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
