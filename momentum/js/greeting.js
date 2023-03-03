import { getLocalStorage } from "./helpers/localStorage.js";

export const greeting = document.querySelector(".greeting");
export const getTimeOfDay = () => {
  const date = new Date();
  const currentHours = date.getHours();
  if (currentHours >= 6 && currentHours <= 11) {
    return "morning";
  } else if (currentHours >= 12 && currentHours <= 17) {
    return "afternoon";
  } else if (currentHours >= 18 && currentHours <= 23) {
    return "evening";
  } else if (currentHours >= 0 && currentHours <= 5) {
    return "night";
  }
};
export const showGreeting = (language = "en") => {
  const timeOfDay = getTimeOfDay();
  language = getLocalStorage("language");
  greeting.textContent = `Good ${timeOfDay},`;
  if (language == "ru") {
    if (greeting.textContent == "Good morning,") {
      return (greeting.textContent = "Доброе утро,");
    } else if (greeting.textContent == "Good afternoon,") {
      return (greeting.textContent = "Добрый день,");
    } else if (greeting.textContent == "Good evening,") {
      return (greeting.textContent = "Добрый вечер,");
    } else if (greeting.textContent == "Good night") {
      return (greeting.textContent = "Доброй ночи,");
    }
  } else {
    return  greeting.textContent = `Good ${timeOfDay},`;
  }
};
