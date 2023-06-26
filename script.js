function getCoordinates() {
  var city = $("#input-text-area").val();
  var limit = "1";

  fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=" +
      limit +
      "&appid=f665b091e1140e43864e309a7561e122"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data[0].name);
      console.log(data[0].lat);
      console.log(data[0].lon);
      getWeather(data);
    });
}

function getWeather(data) {
  var lat = data[0].lat;
  var long = data[0].lon;

  fetch(
    "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon=" +
      long +
      "&appid=f665b091e1140e43864e309a7561e122"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      // current weather
      console.log(data.list[0].weather[0].main);
      $("#weather").text(data.list[0].weather[0].main);
      // kelvin -> fahrenheit
      console.log(Math.round(((data.list[0].main.temp - 273.15) * 9) / 5 + 32));
      $("#temp").text(
        Math.round(((data.list[0].main.temp - 273.15) * 9) / 5 + 32)
      );
    });
}
