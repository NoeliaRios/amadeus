const toUrlEncoded = obj =>
  Object.keys(obj)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]))
    .join("&");

const item = {
  grant_type: "client_credentials",
  client_id: "0mzDtsGfvyGfDhmpBXokPVoT66MWh7ZW",
  client_secret: "jb1juLsAwcnsZijV"
};

fetch(`https://test.api.amadeus.com/v1/security/oauth2/token`, {
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
      `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2020-01-01&returnDate=2020-01-05&adults=2`,
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
