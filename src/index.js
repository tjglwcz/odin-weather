function checkWeather(city) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=8a4396e00e97479f88f130836241604&q=${city}`
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
}
