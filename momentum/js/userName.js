export const userName = document.querySelector('.name');
const setLocalStorage = () => {
  if(userName.value){
    localStorage.setItem('name', userName.value);
  }
};
window.addEventListener('beforeunload', setLocalStorage);

const getLocalStorage = () => {
  if (localStorage.getItem('name')) {
    userName.value = localStorage.getItem('name');
  }
};
window.addEventListener('load', getLocalStorage);
