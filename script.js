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
        Math.round(((data.list[0].main.temp - 273.15) * 9) / 5 + 32) + "ºF"
      );

      // 5-day weather
      // day 1
      console.log(data.list[8].weather[0].main);
      console.log(Math.round(((data.list[8].main.temp - 273.15) * 9) / 5 + 32));
      $("#weather-day1").text(data.list[8].weather[0].main);
      $("#temp-day1").text(
        Math.round(((data.list[8].main.temp - 273.15) * 9) / 5 + 32) + "ºF"
      );

      // day 2
      console.log(data.list[16].weather[0].main);
      console.log(
        Math.round(((data.list[16].main.temp - 273.15) * 9) / 5 + 32)
      );
      $("#weather-day2").text(data.list[16].weather[0].main);
      $("#temp-day2").text(
        Math.round(((data.list[16].main.temp - 273.15) * 9) / 5 + 32) + "ºF"
      );

      // day 3
      console.log(data.list[24].weather[0].main);
      console.log(
        Math.round(((data.list[24].main.temp - 273.15) * 9) / 5 + 32)
      );
      $("#weather-day3").text(data.list[24].weather[0].main);
      $("#temp-day3").text(
        Math.round(((data.list[24].main.temp - 273.15) * 9) / 5 + 32) + "ºF"
      );

      // day 4
      console.log(data.list[32].weather[0].main);
      console.log(
        Math.round(((data.list[32].main.temp - 273.15) * 9) / 5 + 32)
      );
      $("#weather-day4").text(data.list[32].weather[0].main);
      $("#temp-day4").text(
        Math.round(((data.list[32].main.temp - 273.15) * 9) / 5 + 32) + "ºF"
      );

      // day 5
      console.log(data.list[39].weather[0].main);
      console.log(
        Math.round(((data.list[39].main.temp - 273.15) * 9) / 5 + 32)
      );
      $("#weather-day5").text(data.list[39].weather[0].main);
      $("#temp-day5").text(
        Math.round(((data.list[39].main.temp - 273.15) * 9) / 5 + 32) + "ºF"
      );
    });
}
