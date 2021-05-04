var cities = [];

var cityFormEl = document.querySelector("#city-search-form");
var cityInputEl = document.querySelector("#city");
var weatherContainerEl = document.querySelector("#current-wether-container");
var citySearchInputEl = document.querySelector("#searched-city");
var forecastTitle = document.querySelector("#forcast");
var forecastContainerEl = document.querySelector("#fiveday-container");
var pastSearchButtonEl = document.querySelector("#past-search-buttons");

var formSubmitHandler = function(event) {
  event.preventDefault();
  var city = cityInputEl.value.trim();
  if (city) {
    getCityWeather(city);
    get5Day(city);
    cities.unshift({city});
    cityInputEl.value = "";
  }else {
    alert("Please enter a City");
  }
  saveSearch();
  pastSearch(city);
}

var saveSearch = () => {
  localStorage.setItem("cities", JSON.stringify(cities));
};


var getCityWeather = function(city) {
 var apiKey = "844421298d794574c100e3409cee0499"
 var apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

 fetch(apiUrl)
 .then(function(response) {
   response.json().then(function(data) {
     displayWeather(data, city);
   });
 });
};


var displayWeather = function(weather, searchCity) {
  weatherContainerEl.textContent="";
  citySearchInputEl.textContent=searchCity;
}
