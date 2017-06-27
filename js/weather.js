var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getHumidity = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

Weather.prototype.getTemperature = function(city, displayTemperature) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    var tempF = ((1.8 *(response.main.temp - 273)) + 32).toFixed(2);
    displayTemperature(city, tempF);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;
