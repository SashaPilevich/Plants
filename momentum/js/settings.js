import { showDate } from "./date.js";
import { showGreeting } from "./greeting.js";
import { getLocalStorage, setLocalStorage } from "./helpers/localStorage.js";
import { getQuotes } from "./quotes.js";
import { changeLanguageInTodo } from "./todo.js";
import { changeLanguagePlacehoder } from "./userName.js";
import { city, getWeather, languagePlaceholderCity } from "./weather.js";
import { time } from "./time.js";
import { btnControlTodo } from "./todo.js";
import { dateInApp } from "./date.js";
const greetingContainer = document.querySelector(".greeting-container");
const weatherContainer = document.querySelector(".weather");
const playerContainer = document.querySelector(".player");
const quoteContainer = document.querySelector(".quote-container");
const settingsMainContainer = document.querySelector('.settings')
let language;
export const settingsBtn = document.querySelector(".settings-icon");
const settingsContainer = document.querySelector(".settings-container");
const languageTitle = document.querySelector(".language-title");
const imageSourceTitle = document.querySelector(".image-source-title");
const controlElements = document.querySelector(".block-control-text");
const timeText = document.querySelector(".controling-time");
const dateText = document.querySelector(".controling-date");
const greetingText = document.querySelector(".controling-greeting");
const quotesText = document.querySelector(".controling-quotes");
const weatherText = document.querySelector(".controling-weather");
const playerText = document.querySelector(".controling-player");
const todoText = document.querySelector(".controling-todo");
let isClose = true;
settingsBtn.addEventListener("click", () => {
  if (isClose) {
    settingsContainer.style.opacity = "1";
    isClose = false;
  } else {
    settingsContainer.style.opacity = "0";
    isClose = true;
  }
});
export const btnEn = document.querySelector(".btn-en");
export const btnRu = document.querySelector(".btn-ru");
export const appSettings = (currentLanguage = "en") => {
  currentLanguage = getLocalStorage("language");
  const translateSettings = {
    en: {
      lang: "Change language",
      imagesource: "Choose image source",
      controlElement: "Show/hide elements",
      time: "Time",
      date: "Date",
      greeting: "Greeting",
      weather: "Weather",
      todo: "TODO",
      player: "Player",
      quotes: "Quotes",
    },
    ru: {
      lang: "Изменить язык",
      imagesource: "Выберети источник изображений",
      controlElement: "Показать/скрыть элементы",
      time: "Время",
      date: "Дата",
      greeting: "Приветствие",
      weather: "Погода",
      todo: "Список дел",
      player: "Плеер",
      quotes: "Цитаты",
    },
  };
  languageTitle.textContent = translateSettings[currentLanguage].lang;
  imageSourceTitle.textContent = translateSettings[currentLanguage].imagesource;
  controlElements.textContent =
    translateSettings[currentLanguage].controlElement;
  timeText.textContent = translateSettings[currentLanguage].time;
  dateText.textContent = translateSettings[currentLanguage].date;
  greetingText.textContent = translateSettings[currentLanguage].greeting;
  playerText.textContent = translateSettings[currentLanguage].player;
  todoText.textContent = translateSettings[currentLanguage].todo;
  quotesText.textContent = translateSettings[currentLanguage].quotes;
  weatherText.textContent = translateSettings[currentLanguage].weather;
};
btnEn.addEventListener("click", () => {
  btnEn.classList.add("active");
  btnRu.classList.remove("active");
  language = "en";
  localStorage.setItem("language", language);

  getWeather(city.value, language);
  languagePlaceholderCity(language);
  showDate(language);
  showGreeting(language);
  changeLanguagePlacehoder(language);
  getQuotes(language);
  appSettings(language);
  changeLanguageInTodo(language);
});
btnRu.addEventListener("click", () => {
  btnRu.classList.add("active");
  btnEn.classList.remove("active");
  language = "ru";
  localStorage.setItem("language", language);

  getWeather(city.value, language);
  languagePlaceholderCity(language);
  showDate(language);
  showGreeting(language);
  changeLanguagePlacehoder(language);
  getQuotes(language);
  appSettings(language);
  changeLanguageInTodo(language);
});
export let isShowTime = true;
export let isShowDate = true;
export let isShowGreeting = true;
export let isShowWeather = true;
export let isShowPlayer = true;
export let isShowQuotes = true;
export let isShowTodo = true;
export const controlTime = document.querySelector("#control-time");
export const controlDate = document.querySelector("#control-date");
export const controlGreeting = document.querySelector("#control-greeting");
export const controlWeather = document.querySelector("#control-weather");
export const controlPlayer = document.querySelector("#control-player");
export const controlQuotes = document.querySelector("#control-quotes");
export const controlTodo = document.querySelector("#control-todo");

controlTime.addEventListener("change", () => {
  setLocalStorage("showTime", controlTime.checked);
  isShowTime = controlTime.checked;
  controlShowTime();
});
controlDate.addEventListener("change", () => {
  setLocalStorage("showDate", controlDate.checked);
  isShowDate = controlDate.checked;
  controlShowDate();
});
controlGreeting.addEventListener("change", () => {
  setLocalStorage("showGreeting", controlGreeting.checked);
  isShowGreeting = controlGreeting.checked;
  controlShowGreeting();
});
controlWeather.addEventListener("change", () => {
  setLocalStorage("showWeather", controlWeather.checked);
  isShowWeather = controlWeather.checked;
  controlShowWeather();
});
controlPlayer.addEventListener("change", () => {
  setLocalStorage("showPlayer", controlPlayer.checked);
  isShowPlayer = controlPlayer.checked;
  controlShowPlayer();
});
controlQuotes.addEventListener("change", () => {
  setLocalStorage("showQuotes", controlQuotes.checked);
  isShowQuotes = controlQuotes.checked;
  controlShowQuotes();
});
controlTodo.addEventListener("change", () => {
  setLocalStorage("showTodo", controlTodo.checked);
  isShowTodo = controlTodo.checked;
  controlShowTodo();
});

export const controlShowTime = () => {
  if (isShowTime) {
    time.classList.remove("hide");
    time.classList.add("show");
  } else {
    time.classList.remove("show");
    time.classList.add("hide");
  }
};
export const controlShowDate = () => {
  if (isShowDate) {
    dateInApp.classList.remove("hide");
    dateInApp.classList.add("show");
  } else {
    dateInApp.classList.remove("show");
    dateInApp.classList.add("hide");
  }
};
export const controlShowGreeting = () => {
  if (isShowGreeting) {
    greetingContainer.classList.remove("hide");
    greetingContainer.classList.add("show");
  } else {
    greetingContainer.classList.remove("show");
    greetingContainer.classList.add("hide");
  }
};
export const controlShowWeather = () => {
  if (isShowWeather) {
    weatherContainer.classList.remove("hide");
    weatherContainer.classList.add("show");
  } else {
    weatherContainer.classList.remove("show");
    weatherContainer.classList.add("hide");
  }
};
export const controlShowPlayer = () => {
  if (isShowPlayer) {
    playerContainer.classList.remove("hide");
    playerContainer.classList.add("show");
  } else {
    playerContainer.classList.remove("show");
    playerContainer.classList.add("hide");
  }
};
export const controlShowQuotes = () => {
  if (isShowQuotes) {
    quoteContainer.classList.remove("hide");
    quoteContainer.classList.add("show");
    getQuotes();
  } else {
    quoteContainer.classList.remove("show");
    quoteContainer.classList.add("hide");
  }
};
export const controlShowTodo = () => {
  if (isShowTodo) {
    btnControlTodo.classList.remove("hide");
    btnControlTodo.classList.add("show");
  } else {
    btnControlTodo.classList.remove("show");
    btnControlTodo.classList.add("hide");
  }
};

window.addEventListener("load", () => {
  isShowTime = getLocalStorage("showTime");
  if (isShowTime == undefined) {
    setLocalStorage("showTime", true);
    isShowTime = true;
  } else {
    isShowTime = isShowTime == "true";
  }
  isShowDate = getLocalStorage("showDate");
  if (isShowDate == undefined) {
    setLocalStorage("showDate", true);
    isShowDate = true;
  } else {
    isShowDate = isShowDate == "true";
  }
  isShowGreeting = getLocalStorage("showGreeting");
  if (isShowGreeting == undefined) {
    setLocalStorage("showGreeting", true);
    isShowGreeting = true;
  } else {
    isShowGreeting = isShowGreeting == "true";
  }
  isShowWeather = getLocalStorage("showWeather");
  if (isShowWeather == undefined) {
    setLocalStorage("showWeather", true);
    isShowWeather = true;
  } else {
    isShowWeather = isShowWeather == "true";
  }
  isShowPlayer = getLocalStorage("showPlayer");
  if (isShowPlayer == undefined) {
    setLocalStorage("showPlayer", true);
    isShowPlayer = true;
  } else {
    isShowPlayer = isShowPlayer == "true";
  }
  isShowQuotes = getLocalStorage("showQuotes");
  if (isShowQuotes == undefined) {
    setLocalStorage("showQuotes", true);
    isShowQuotes = true;
  } else {
    isShowQuotes = isShowQuotes == "true";
  }
  isShowTodo = getLocalStorage("showTodo");
  if (isShowTodo == undefined) {
    setLocalStorage("showTodo", true);
    isShowTodo = true;
  } else {
    isShowTodo = isShowTodo == "true";
  }

  controlShowTime();
  controlShowDate();
  controlShowGreeting();
  controlShowWeather();
  controlShowPlayer();
  controlShowQuotes();
  controlShowTodo();

  controlTime.checked = isShowTime;
  controlDate.checked = isShowDate;
  controlGreeting.checked = isShowGreeting;
  controlWeather.checked = isShowWeather;
  controlPlayer.checked = isShowPlayer;
  controlQuotes.checked = isShowQuotes;
  controlTodo.checked = isShowTodo;
});
document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(settingsMainContainer);
	if ( ! withinBoundaries ) {
		settingsContainer.style.opacity = '0'; 
    isOpen=false
	}
})

