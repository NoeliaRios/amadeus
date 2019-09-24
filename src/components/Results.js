import React, { Component } from "react";
import ResultsItem from "./ResultItem";
import "./results.scss";
// import { thisExpression } from "@babel/types";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vuelos: []
      // iataOrigin: [],
      // iataDest: "",
      // fromDate: "",
      // toDate: "",
      // adults: ""
    };
  }

  componentDidMount() {
    const toUrlEncoded = obj =>
      Object.keys(obj)
        .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
        .join("&");

    const item = {
      grant_type: "client_credentials",
      client_id: "KnnG1QScYBhX5YIW0foiQXuYv72oTIZA",
      client_secret: "mN6ELcEOGpol4xjt"
    };

    fetch("https://test.api.amadeus.com/v1/security/oauth2/token", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: toUrlEncoded(item)
    })
      .then(res => res.json())
      .then(data => {
        const accessToken = data.access_token;
        const iataOrigin = this.props.iataOrigin;
        const iataDest = this.props.iataDest;
        const fromDate = this.props.fromDate;
        const toDate = this.props.toDate;
        const adults = this.props.adults;

        fetch(
          `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataOrigin}&destinationLocationCode=${iataDest}&departureDate=${fromDate}&returnDate=${toDate}&adults=${adults}&max=50`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
          .then(res => res.json())
          .then(data => {
            this.setState({
              vuelos: data.data
              // iataOrigin: data.id,
              // iataDest: data.iataDest,
              // fromDate: data.fromDate,
              // toDate: data.toDate,
              // adults: data.adults
            });
            console.log(data);
          });
      });
  }

  render() {
    return (
      <div className="results">
        <h1>Results</h1>
        <div className="items">
          {this.state.vuelos.map(i => (
            <ResultsItem data={i} />
          ))}
        </div>
      </div>
    );
  }
}

export default Results;
