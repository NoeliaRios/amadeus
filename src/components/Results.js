import React, { Component } from "react";
import "./results.scss";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iataOrigin: "",
      iataDest: "",
      fromDate: "",
      toDate: "",
      adults:""
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
        const iataOrigin= {this.props.query}

        fetch(
          "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataOrigin}&destinationLocationCode=${iataDest}&departureDate=${fromDate}&returnDate=${toData}&adults=${adults}&max=50",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
          .then(res => res.json())
          .then(data => {
            this.setState({
              vuelos: data.data,
              iataOrigin: "",
              iataDest: "",
              fromDate: "",
              toDate: "",
              adults: ""
            });
            console.log(this.state);
          });
      });
  }

  render() {
    const { arrival, checkIn, checkOut } = this.props.fields;
    return (
      <div className="results">
        <p>
          Departure:{this.state.vuelos.data}
          Arrival:{arrival}
          Check In:{checkIn}
          Check Out: {checkOut}
        </p>
      </div>
    );
  }
}

export default Results;
