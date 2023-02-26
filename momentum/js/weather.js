import { getLocalStorage, setLocalStorage } from "./helpers/localStorage.js";

export const weatherIcon = document.querySelector(".weather-icon");
export const temperature = document.querySelector(".temperature");
export const weatherDescription = document.querySelector(
  ".weather-description"
);
export const windSpeed = document.querySelector(".wind-speed");
export const humidity = document.querySelector(".humidity");
export const city = document.querySelector(".city");
export const weatherError = document.querySelector(".weather-error");

export async function getWeather(city = "Minsk", language = "en") {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${language}&appid=e7af6e4745f3d448d7a7fe9c4c9632d8&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  const translateWeather = {
    en: {
      windSpeed: "Wind speed: ",
      humidity: "Humidity: ",
      speed: "m/s",
      error: "City not found",
    },
    ru: {
      windSpeed: "Скорость ветра: ",
      humidity: "Влажность: ",
      speed: "м/с",
      error: "Город не найден",
    },
  };
  if (data.cod === 200) {
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    windSpeed.textContent = `${
    translateWeather[language].windSpeed
    }${Math.floor(data.wind.speed)} ${translateWeather[language].speed}`;
    humidity.textContent = `${translateWeather[language].humidity}${Math.floor(
      data.main.humidity
    )} %`;
    temperature.textContent = `${Math.floor(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description[0].toUpperCase()+data.weather[0].description.slice(1);
    weatherError.textContent = "";
  } else {
    weatherError.textContent = `${translateWeather[language].error}`;
    weatherIcon.className = "weather-icon";
    windSpeed.textContent = "";
    humidity.textContent = "";
    temperature.textContent = "";
    weatherDescription.textContent = "";
  }
}
city.addEventListener("keypress", setCity);
function setCity(event) {
  if (event.code === "Enter") {
    let currentLanguage = localStorage.getItem("language");
    getWeather(city.value, currentLanguage);
    languagePlaceholderCity(currentLanguage);
    city.blur();
  }
}
export function languagePlaceholderCity(lang) {
  if (city.value == "Minsk" || city.value == "Минск") {
    if (lang == "en") {
      city.value = "Minsk";
    } else {
      city.value = "Минск";
      city.placeholder = "Введите название города"
    }
  }

  if (city.placeholder) {
    city.placeholder =
      lang == "en" ? "Enter city name" : "Введите название города";
  }
}
window.addEventListener("load", () => {
  let currentCity = getLocalStorage("city");
  let currentLanguage = getLocalStorage("language");
  if (currentCity ) {
    city.value = currentCity;
  } else {
    if (currentLanguage == "en") {
      city.value = "Minsk";
    } else  {
      city.value = "Минск";
      city.placeholder = "Введите название города";
    }
  }
  getWeather(city.value, currentLanguage);
});
window.addEventListener("beforeunload", () => {
  let currentLanguage = getLocalStorage("language");
  if(weatherError.textContent != 'City not found' && weatherError.textContent != 'Город не найден' ){
    setLocalStorage("city", city.value);
  }else {
    if(currentLanguage == 'en'){
      setLocalStorage("city", 'Minsk');
    }else{
      setLocalStorage("city", 'Минск');
    }
   
  }
    
});
