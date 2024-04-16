const apiKey = "8a4396e00e97479f88f130836241604";

const formInput = document.querySelector("#formInput");
const submitBtn = document.querySelector("button");

const cityDisplay = document.querySelector("#cityDisplay");
const conditionDisplay = document.querySelector("#conditionDisplay");
const tempDisplay = document.querySelector("#tempDisplay");
const feelsDisplay = document.querySelector("#feelsDisplay");
const humidityDisplay = document.querySelector("#humidityDisplay");

async function requestData(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: Could not retrieve data.", error);
    return null;
  }
}

function parseData(data) {
  return {
    name: data.location.name,
    temp: data.current.temp_c,
    feelsLikeTemp: data.current.feelslike_c,
    humidity: data.current.humidity,
    condition: data.current.condition.text,
  };
}

function renderData(data) {
  cityDisplay.textContent = data.name;
  conditionDisplay.textContent = data.condition;
  tempDisplay.textContent = `${data.temp}°C`;
  feelsDisplay.textContent = `Feels like ${data.feelsLikeTemp}°C`;
  humidityDisplay.textContent = `Humidity: ${data.humidity}%`;
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  requestData(formInput.value)
    .then((data) => {
      const newData = parseData(data);
      renderData(newData);
    })
    .catch((error) => {
      console.error("Error occurred:", error);
    });
});
