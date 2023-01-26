const myGrade = {
  "Вёрстка валидная": 10,
  "Вёрстка семантическая": {
    "<header>, <main>, <footer>": 3,
    "пять элементов <section>": 3,
    "только один заголовок <h1>": 3,
    "четыре заголовка <h2>": 3,
    "один элемент <nav>": 3,
    "два списка ul > li > a (панель навигации, ссылки на соцсети)": 3,
    "пять кнопок <button>": 2,
  },
  "Вёрстка соответствует макету": {
    "блок <header>": 6,
    "секция welcome": 7,
    "секция about": 7,
    "секция service": 7,
    "секция prices": 7,
    "секция contacts": 7,
    "блок <footer>": 7,
  },
  "Требования к css": {
    "для построения сетки используются флексы или гриды": 2,
    "при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону": 2,
    "фоновый цвет тянется на всю ширину страницы": 2,
    "иконки добавлены в формате .svg.": 2,
    "изображения добавлены в формате .jpg или .png": 2,
    "есть favicon": 2,
  },
  "Интерактивность, реализуемая через css": 20,
};
console.log(myGrade, 110);
const btnGarden = document.querySelector(".btn-garden");
const btnLawn = document.querySelector(".btn-lawn");
const btnPlant = document.querySelector(".btn-plant");
const gardenContainer = document.querySelectorAll(".garden");
const lawnContainer = document.querySelectorAll(".lawn");
const plantContainer = document.querySelectorAll(".plant");

let inBlurGarden = false;
let inBlurLawn = false;
let inBlurPlant = false;
let count = 0;

btnGarden.addEventListener("click", () => {
  console.log("garden");
  if (!inBlurGarden && count == 0) {
    lawnContainer.forEach((item) => {
      item.classList.remove('noblur')
      item.classList.add('blur')
    });
    plantContainer.forEach((item) => {
      item.classList.remove('noblur')
      item.classList.add('blur')
    });
    btnGarden.classList.add('active')
    btnGarden.classList.remove('noactive')
    inBlurGarden = true;
    ++count;
    console.log(count);
  }else if(!inBlurGarden && count == 1 && inBlurLawn){
    gardenContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    plantContainer.forEach((item) => {
      item.classList.add('blur')
    });
    btnGarden.classList.add('active')
    btnGarden.classList.remove('noactive')
    inBlurGarden = true;
    ++count;
    console.log(count);
  } else if(!inBlurGarden && count == 1 && inBlurPlant){
    gardenContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    lawnContainer.forEach((item) => {
      item.classList.add('blur')
    });
    btnGarden.classList.add('active')
    btnGarden.classList.remove('noactive')
    inBlurGarden = true;
    ++count;
    console.log(count);
  } else if(inBlurGarden && count == 2){
    gardenContainer.forEach((item) => {
      item.classList.remove('noblur')
      item.classList.add('blur')
    });
    btnGarden.classList.add('noactive')
    btnGarden.classList.remove('active')
    inBlurGarden = false;
    --count;
    console.log(count);
  }
  else if(inBlurGarden && count == 1){
    lawnContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    plantContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    btnGarden.classList.add('noactive')
    btnGarden.classList.remove('active')
    inBlurGarden = false;
    --count;
    console.log(count);
  }
});
btnLawn.addEventListener("click", () => {
  console.log("lawn");
  if (!inBlurLawn && count == 0) {
    gardenContainer.forEach((item) => {
      item.classList.remove('noblur')
      item.classList.add('blur')
    });
    plantContainer.forEach((item) => {
      item.classList.remove('noblur')
      item.classList.add('blur')
    });
    btnLawn.classList.add('active')
    btnLawn.classList.remove('noactive')
    inBlurLawn = true;
    ++count;
    console.log(count);
  }else if(!inBlurLawn && count == 1 && inBlurGarden){
    lawnContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    plantContainer.forEach((item) => {
      item.classList.add('blur')
    });
    btnLawn.classList.add('active')
    btnLawn.classList.remove('noactive')
    inBlurLawn = true;
    ++count;
    console.log(count);
  } else if(!inBlurLawn && count == 1 && inBlurPlant){
    lawnContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    btnLawn.classList.add('active')
    btnLawn.classList.remove('noactive')
    inBlurLawn = true;
    ++count;
    console.log(count);
  } else if(inBlurLawn && count == 2){
    lawnContainer.forEach((item) => {
      item.classList.remove('noblur')
      item.classList.add('blur')
    });
    btnLawn.classList.add('noactive')
    btnLawn.classList.remove('active')
    inBlurLawn = false;
    --count;
    console.log(count);
  }else if(inBlurLawn && count == 1){
    gardenContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    plantContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    btnLawn.classList.add('noactive')
    btnLawn.classList.remove('active')
    inBlurLawn = false;
    --count;
    console.log(count);
  }
});
btnPlant.addEventListener("click", () => {
  console.log("plant");
  if (!inBlurPlant && count == 0) {
    gardenContainer.forEach((item) => {
      item.classList.remove('noblur')
      item.classList.add('blur')
    });
    lawnContainer.forEach((item) => {
      item.classList.remove('noblur')
      item.classList.add('blur')
    });
    btnPlant.classList.add('active')
    btnPlant.classList.remove('noactive')
    inBlurPlant = true;
    ++count;
    console.log(count);
  }else if(!inBlurPlant && count == 1 && inBlurGarden){
    plantContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    btnPlant.classList.add('active')
    btnPlant.classList.remove('noactive')
    inBlurPlant = true;
    ++count;
    console.log(count);
  } else if(!inBlurPlant && count == 1 && inBlurLawn){
    plantContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    btnPlant.classList.add('active')
    btnPlant.classList.remove('noactive')
    inBlurPlant = true;
    ++count;
    console.log(count);
  } else if(inBlurPlant && count == 2){
    plantContainer.forEach((item) => {
      item.classList.remove('noblur')
      item.classList.add('blur')
    });
    btnPlant.classList.add('noactive')
    btnPlant.classList.remove('active')
    inBlurPlant = false;
    --count;
    console.log(count);
  }
  else if(inBlurPlant && count == 1){
    lawnContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    gardenContainer.forEach((item) => {
      item.classList.add('noblur')
      item.classList.remove('blur')
    });
    btnPlant.classList.add('noactive')
    btnPlant.classList.remove('active')
    inBlurPlant = false;
    --count;
    console.log(count);
  }
});

