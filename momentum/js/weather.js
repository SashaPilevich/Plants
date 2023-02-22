import { getLocalStorage, setLocalStorage } from "./helpers/localStorage.js";

export const weatherIcon = document.querySelector(".weather-icon");
export const temperature = document.querySelector(".temperature");
export const weatherDescription = document.querySelector(
  ".weather-description"
);
export const windSpeed = document.querySelector('.wind-speed');
export const humidity = document.querySelector('.humidity')
export const city = document.querySelector(".city");
export const weatherError = document.querySelector('.weather-error')

export async function getWeather(city = "Minsk") {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=e7af6e4745f3d448d7a7fe9c4c9632d8&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data)
  if(data.cod === 200){
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    windSpeed.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`
    humidity.textContent = `Humidity: ${Math.floor(data.main.humidity)} %`
    temperature.textContent =  `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    weatherError.textContent = ''
  }else {
    weatherError.textContent = `${data.message}`;
    weatherIcon.className = "weather-icon";
    windSpeed.textContent = ''
    humidity.textContent = ''
    temperature.textContent = ''
    weatherDescription.textContent =''

  }
  
}
city.addEventListener("keypress", setCity);
function setCity(event) {
  if (event.code === "Enter") {
    getWeather(city.value);
    city.blur();
  }
}

window.addEventListener("load", () => {
  console.log(getLocalStorage("city"))
  if (getLocalStorage("city")) {
    city.value = getLocalStorage("city");
  } else {
    city.value = "Minsk";
  }
  getWeather(city.value);
});
window.addEventListener("beforeunload", () => {
  setLocalStorage("city", city.value);
});
