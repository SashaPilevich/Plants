import { showDate } from "./date.js";
import { showGreeting } from "./greeting.js";
import { getLocalStorage } from "./helpers/localStorage.js";
import { getQuotes } from "./quotes.js";
import { changeLanguagePlacehoder } from "./userName.js";
import { city, getWeather,languagePlaceholderCity } from "./weather.js";
let language;
export const settingsBtn = document.querySelector('.settings-icon')
const settingsContainer = document.querySelector('.settings-container')
const languageTitle = document.querySelector('.language-title')
const imageSourceTitle = document.querySelector('.image-source-title')
let isClose = true
settingsBtn.addEventListener('click',() => {
  if(isClose){
    settingsContainer.style.opacity = '1';
    isClose = false
  }else {
    settingsContainer.style.opacity = '0';
    isClose = true
  }
})
export const btnEn = document.querySelector('.btn-en')
export const btnRu = document.querySelector('.btn-ru')
export const appSettings = (currentLanguage = 'en') => {
  currentLanguage = getLocalStorage('language')
  const translateSettings = {
    en:{
      lang:"Change language",
      imagesource:"Choose image source"
    },
    ru:{
      lang:"Изменить язык",
      imagesource:"Выберети источник изображений"
    }
  }
languageTitle.textContent = translateSettings[currentLanguage].lang
imageSourceTitle.textContent = translateSettings[currentLanguage].imagesource
}
btnEn.addEventListener('click',() => {
  btnEn.classList.add('active')
  btnRu.classList.remove('active')
  language = 'en'
  localStorage.setItem('language',language)

  getWeather(city.value,language)
  languagePlaceholderCity(language)
  showDate(language)
  showGreeting(language)
  changeLanguagePlacehoder(language)
  getQuotes(language)
  appSettings(language)
})
btnRu.addEventListener('click',() => {
  btnRu.classList.add('active')
  btnEn.classList.remove('active')
  language = 'ru'
  localStorage.setItem('language',language)

  getWeather(city.value,language)
  languagePlaceholderCity(language)
  showDate(language)
  showGreeting(language)
  changeLanguagePlacehoder(language)
  getQuotes(language)
  appSettings(language)
})