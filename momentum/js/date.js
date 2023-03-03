import { getLocalStorage } from "./helpers/localStorage.js";

export const dateInApp = document.querySelector('.date');
export const showDate = (currentLanguage='en') => {
  const date = new Date();
  const options = {weekday: 'long',day:'numeric', month:'long'}
  let currentDate;
  currentLanguage = getLocalStorage('language')
  if(currentLanguage == 'en'){
    currentDate = date.toLocaleDateString('en-US',options)
  }else {
    currentDate = date.toLocaleDateString('ru-RU',options)
  }
  
  dateInApp.textContent = currentDate;
}
