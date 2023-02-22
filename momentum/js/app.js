import { time } from "./time.js";
import { dateInApp } from "./date.js";
import { greeting } from "./greeting.js";
import { userName } from "./userName.js";
import { body } from "./backgroundImage.js";
import { city, weatherIcon, weatherDescription, temperature, windSpeed } from "./weather.js";
import { getWeather } from "./weather.js";
import { getLocalStorage, setLocalStorage } from "./helpers/localStorage.js";

export const app = () => {
  getWeather()
  const root = document.querySelector('#root');
}