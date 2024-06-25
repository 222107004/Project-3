let city = "Paris";
let apikey = "1133ddbaebf743fc32d57eobt926aab0";

let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;

function displaytemperature(response) {

  let temperatureelement = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let country = response.data.country;

  temperatureelement.innerHTML = `The temperature in ${city} ,${country} is ${temperature}&deg`;
}

//need to get the info provided by link and display the info
axios.get(apiurl).then(displaytemperature);
