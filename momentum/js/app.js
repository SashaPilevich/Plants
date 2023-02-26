import { time } from "./time.js";
import { dateInApp } from "./date.js";
import { greeting } from "./greeting.js";
import { userName } from "./userName.js";
import { body } from "./backgroundImage.js";
import { city, weatherIcon, weatherDescription, temperature, windSpeed, languagePlaceholderCity } from "./weather.js";
import { getWeather } from "./weather.js";
import { getLocalStorage, setLocalStorage } from "./helpers/localStorage.js";
import { getQuotes } from "./quotes.js";
import { playPauseAudio } from "./audio.js";
import { playList } from "./playList.js";
import { settingsBtn} from "./settings.js";
import { btnRu, btnEn } from "./settings.js";
import { appSettings } from "./settings.js";
import { getBkgFromUnsplash } from "./backgroundImage.js";
import { radioGit } from "./backgroundImage.js";
import { chooseImageSource } from "./backgroundImage.js";
import { btnControlTodo } from "./todo.js";


let currentLanguage;
export const app = () => {
  const root = document.querySelector('#root');
  currentLanguage = localStorage.getItem('language')
  if(currentLanguage == undefined){
    localStorage.setItem('language','en')
    currentLanguage = 'en'
  }
  if(currentLanguage == 'en'){
    btnEn.classList.add('active')
    btnRu.classList.remove('active')
  } else if(currentLanguage == 'ru') {
    btnRu.classList.add('active')
    btnEn.classList.remove('active')
  }
  appSettings(currentLanguage)
  chooseImageSource(radioGit.value)
}