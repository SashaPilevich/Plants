import { getLocalStorage, setLocalStorage } from "./helpers/localStorage.js";

export const userName = document.querySelector('.name');
const setNameLocalStorage = () => {
  if(userName.value){
    setLocalStorage('name', userName.value);
  }
};
window.addEventListener('beforeunload', setNameLocalStorage);

const getNameLocalStorage = () => {
  if (getLocalStorage('name')) {
    userName.value = getLocalStorage('name');
  }
};
window.addEventListener('load', getNameLocalStorage);
