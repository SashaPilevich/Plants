import { getLocalStorage, setLocalStorage } from "./helpers/localStorage.js";

export const userName = document.querySelector('.name');
const setNameLocalStorage = () => {
  if(userName.value){
    setLocalStorage('name', userName.value);
  } else {
    setLocalStorage('name', '')
  }
};
window.addEventListener('beforeunload', setNameLocalStorage);

const getNameLocalStorage = () => {
  let currentLanguage = localStorage.getItem("language");
  if (getLocalStorage('name')) {
    userName.value = getLocalStorage('name');
  }else {


changeLanguagePlacehoder(currentLanguage)
  }
};
userName.addEventListener("keypress", setName);
function setName(event) {
  if (event.code === "Enter") {
   
    setNameLocalStorage()
    userName.blur();
  }
}
export const changeLanguagePlacehoder = (currentLanguage)=>{
  currentLanguage = getLocalStorage('language')
  if(currentLanguage=='en'){
    userName.placeholder = 'Enter your name...'
  }else {
    userName.placeholder = 'Введите ваше имя...'
  }
}
window.addEventListener('load', getNameLocalStorage);
