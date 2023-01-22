const myGradePlants2 = {
  "Вёрстка соответствует макету. Ширина экрана 768px": 24,
  "Вёрстка соответствует макету. Ширина экрана 380px ":24,
  "Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется":15,
  "На ширине экрана 380рх и меньше реализовано адаптивное меню":22
}
console.log(myGradePlants2, 85)
const myGrade = {
  "Вёрстка валидная": 10,
  "Вёрстка семантическая": {
    "<header>, <main>, <footer>": 3,
    "пять элементов <section>":3,
    "только один заголовок <h1>":3,
    "четыре заголовка <h2>":3,
    "один элемент <nav>":3,
    "два списка ul > li > a (панель навигации, ссылки на соцсети)":3,
    "пять кнопок <button>":2
  },
  "Вёрстка соответствует макету":{
    "блок <header>":6,
    "секция welcome":7,
    "секция about":7,
    "секция service":7,
    "секция prices":7,
    "секция contacts":7,
    "блок <footer>":7,
  },
  "Требования к css":{
    "для построения сетки используются флексы или гриды":2,
    "при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону":2,
    "фоновый цвет тянется на всю ширину страницы":2,
    "иконки добавлены в формате .svg.":2,
    "изображения добавлены в формате .jpg или .png":2,
    "есть favicon":2,
  },
  "Интерактивность, реализуемая через css":20
}
console.log(myGrade, 110)

let isOpen = false;
const burger = document.querySelector('.burger-menu');
const burgerLine = document.querySelector('.burger-line-one');
const burgerLineTwo = document.querySelector('.burger-line-two');
const mobilenav = document.querySelector('.mobile-nav');
const link = document.querySelector('.nav-list-mobile');

burger.addEventListener('click', openCloseBurgerMenu);
link.addEventListener('click', (event) => {
  event.stopPropagation()
  openCloseBurgerMenu()
});
mobilenav.addEventListener('click', openCloseBurgerMenu);

function openCloseBurgerMenu(){
  if (!isOpen) {
    burger.classList.add('active');
    burgerLine.classList.add('active');
    burgerLineTwo.classList.add('active');
    mobilenav.classList.add('active');
    isOpen = true;
  } else {
    burger.classList.remove('active');
    burgerLine.classList.remove('active');
    burgerLineTwo.classList.remove('active');
    mobilenav.classList.remove('active');
    isOpen = false;
  }
}
