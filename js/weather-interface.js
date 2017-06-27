var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
}

var displayTemperature = function(city, temperatureData) {
  $('.showTemperature').text("The temperature in " + city + " is " + temperatureData + "°");
  console.log(temperatureData);
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getHumidity(city, displayHumidity);
    currentWeatherObject.getTemperature(city, displayTemperature);
  });
});
