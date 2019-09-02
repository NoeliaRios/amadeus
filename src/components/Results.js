import React, { Component } from "react";
import "./results.scss";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

        fetch(
          "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2020-01-01&returnDate=2020-01-05&adults=2",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        )
          .then(res => res.json())
          .then(data => {
            console.log(data);
          });
      });
  }

  render() {
    const { departure, arrival, checkIn, checkOut } = this.props.fields;
    return (
      <div className="results">
        <p>
          Departure:{departure}
          Arrival:{arrival}
          Check In:{checkIn}
          Check Out: {checkOut}
        </p>
      </div>
    );
  }
}

export default Results;
