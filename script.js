function getCoordinates() {
  var city = $("#input-text-area").val();
  var limit = "1";

  fetch(
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
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
      $("#city").text(
        data.city.name +
          ", " +
          data.city.country +
          " " +
          dayjs().format("M/D/YY")
      );
      console.log(data.list[0].weather[0].main);
      $("#weather").text(data.list[0].weather[0].main);
      // kelvin -> fahrenheit
      console.log(Math.round(((data.list[0].main.temp - 273.15) * 9) / 5 + 32));
      $("#temp").text(
        "Temp: " +
          Math.round(((data.list[0].main.temp - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      console.log(
        Math.round(((data.list[0].main.feels_like - 273.15) * 9) / 5 + 32)
      );
      $("#feels-like").text(
        "Feels Like: " +
          Math.round(((data.list[0].main.feels_like - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      // wind m/s -> mph
      console.log(Math.round(data.list[0].wind.speed * 2.23694));
      $("#wind").text(
        "Wind: " + Math.round(data.list[0].wind.speed * 2.23694) + " MPH"
      );
      // humidity
      console.log(data.list[0].main.humidity);
      $("#humidity").text("Humidity: " + data.list[0].main.humidity + "%");

      // 5-day weather
      $("#five-day").text("5 Day Forecast");

      // day 1
      console.log(data.list[8].weather[0].main);
      console.log(Math.round(((data.list[8].main.temp - 273.15) * 9) / 5 + 32));
      $("#day1").text(dayjs().add(1, "day").format("M/D/YY"));
      $("#weather-day1").text(data.list[8].weather[0].main);
      $("#temp-day1").text(
        "Temp: " +
          Math.round(((data.list[8].main.temp - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#feels-like-day1").text(
        "Feels Like: " +
          Math.round(((data.list[8].main.feels_like - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#wind-day1").text(
        "Wind: " + Math.round(data.list[8].wind.speed * 2.23694) + " MPH"
      );
      $("#humidity-day1").text("Humidity: " + data.list[8].main.humidity + "%");

      // day 2
      console.log(data.list[16].weather[0].main);
      console.log(
        Math.round(((data.list[16].main.temp - 273.15) * 9) / 5 + 32)
      );
      $("#day2").text(dayjs().add(2, "day").format("M/D/YY"));
      $("#weather-day2").text(data.list[16].weather[0].main);
      $("#temp-day2").text(
        "Temp: " +
          Math.round(((data.list[16].main.temp - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#feels-like-day2").text(
        "Feels Like: " +
          Math.round(((data.list[16].main.feels_like - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#wind-day2").text(
        "Wind: " + Math.round(data.list[16].wind.speed * 2.23694) + " MPH"
      );
      $("#humidity-day2").text(
        "Humidity: " + data.list[16].main.humidity + "%"
      );

      // day 3
      console.log(data.list[24].weather[0].main);
      console.log(
        Math.round(((data.list[24].main.temp - 273.15) * 9) / 5 + 32)
      );
      $("#day3").text(dayjs().add(3, "day").format("M/D/YY"));
      $("#weather-day3").text(data.list[24].weather[0].main);
      $("#temp-day3").text(
        "Temp: " +
          Math.round(((data.list[24].main.temp - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#feels-like-day3").text(
        "Feels Like: " +
          Math.round(((data.list[24].main.feels_like - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#wind-day3").text(
        "Wind: " + Math.round(data.list[24].wind.speed * 2.23694) + " MPH"
      );
      $("#humidity-day3").text(
        "Humidity: " + data.list[24].main.humidity + "%"
      );

      // day 4
      console.log(data.list[32].weather[0].main);
      console.log(
        Math.round(((data.list[32].main.temp - 273.15) * 9) / 5 + 32)
      );
      $("#day4").text(dayjs().add(4, "day").format("M/D/YY"));
      $("#weather-day4").text(data.list[32].weather[0].main);
      $("#temp-day4").text(
        "Temp: " +
          Math.round(((data.list[32].main.temp - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#feels-like-day4").text(
        "Feels Like: " +
          Math.round(((data.list[32].main.feels_like - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#wind-day4").text(
        "Wind: " + Math.round(data.list[32].wind.speed * 2.23694) + " MPH"
      );
      $("#humidity-day4").text(
        "Humidity: " + data.list[32].main.humidity + "%"
      );

      // day 5
      console.log(data.list[39].weather[0].main);
      console.log(
        Math.round(((data.list[39].main.temp - 273.15) * 9) / 5 + 32)
      );
      $("#day5").text(dayjs().add(5, "day").format("M/D/YY"));
      $("#weather-day5").text(data.list[39].weather[0].main);
      $("#temp-day5").text(
        "Temp: " +
          Math.round(((data.list[39].main.temp - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#feels-like-day5").text(
        "Feels Like: " +
          Math.round(((data.list[39].main.feels_like - 273.15) * 9) / 5 + 32) +
          "ºF"
      );
      $("#wind-day5").text(
        "Wind: " + Math.round(data.list[39].wind.speed * 2.23694) + " MPH"
      );
      $("#humidity-day5").text(
        "Humidity: " + data.list[39].main.humidity + "%"
      );
    });
}
