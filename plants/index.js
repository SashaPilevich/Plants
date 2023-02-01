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
      item.classList.remove("noblur");
      item.classList.add("blur");
    });
    plantContainer.forEach((item) => {
      item.classList.remove("noblur");
      item.classList.add("blur");
    });
    btnGarden.classList.add("active");
    btnGarden.classList.remove("noactive");
    inBlurGarden = true;
    ++count;
    console.log(count);
  } else if (!inBlurGarden && count == 1 && inBlurLawn) {
    gardenContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    plantContainer.forEach((item) => {
      item.classList.add("blur");
    });
    btnGarden.classList.add("active");
    btnGarden.classList.remove("noactive");
    inBlurGarden = true;
    ++count;
    console.log(count);
  } else if (!inBlurGarden && count == 1 && inBlurPlant) {
    gardenContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    lawnContainer.forEach((item) => {
      item.classList.add("blur");
    });
    btnGarden.classList.add("active");
    btnGarden.classList.remove("noactive");
    inBlurGarden = true;
    ++count;
    console.log(count);
  } else if (inBlurGarden && count == 2) {
    gardenContainer.forEach((item) => {
      item.classList.remove("noblur");
      item.classList.add("blur");
    });
    btnGarden.classList.add("noactive");
    btnGarden.classList.remove("active");
    inBlurGarden = false;
    --count;
    console.log(count);
  } else if (inBlurGarden && count == 1) {
    lawnContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    plantContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    btnGarden.classList.add("noactive");
    btnGarden.classList.remove("active");
    inBlurGarden = false;
    --count;
    console.log(count);
  }
});
btnLawn.addEventListener("click", () => {
  console.log("lawn");
  if (!inBlurLawn && count == 0) {
    gardenContainer.forEach((item) => {
      item.classList.remove("noblur");
      item.classList.add("blur");
    });
    plantContainer.forEach((item) => {
      item.classList.remove("noblur");
      item.classList.add("blur");
    });
    btnLawn.classList.add("active");
    btnLawn.classList.remove("noactive");
    inBlurLawn = true;
    ++count;
    console.log(count);
  } else if (!inBlurLawn && count == 1 && inBlurGarden) {
    lawnContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    plantContainer.forEach((item) => {
      item.classList.add("blur");
    });
    btnLawn.classList.add("active");
    btnLawn.classList.remove("noactive");
    inBlurLawn = true;
    ++count;
    console.log(count);
  } else if (!inBlurLawn && count == 1 && inBlurPlant) {
    lawnContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    btnLawn.classList.add("active");
    btnLawn.classList.remove("noactive");
    inBlurLawn = true;
    ++count;
    console.log(count);
  } else if (inBlurLawn && count == 2) {
    lawnContainer.forEach((item) => {
      item.classList.remove("noblur");
      item.classList.add("blur");
    });
    btnLawn.classList.add("noactive");
    btnLawn.classList.remove("active");
    inBlurLawn = false;
    --count;
    console.log(count);
  } else if (inBlurLawn && count == 1) {
    gardenContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    plantContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    btnLawn.classList.add("noactive");
    btnLawn.classList.remove("active");
    inBlurLawn = false;
    --count;
    console.log(count);
  }
});
btnPlant.addEventListener("click", () => {
  console.log("plant");
  if (!inBlurPlant && count == 0) {
    gardenContainer.forEach((item) => {
      item.classList.remove("noblur");
      item.classList.add("blur");
    });
    lawnContainer.forEach((item) => {
      item.classList.remove("noblur");
      item.classList.add("blur");
    });
    btnPlant.classList.add("active");
    btnPlant.classList.remove("noactive");
    inBlurPlant = true;
    ++count;
    console.log(count);
  } else if (!inBlurPlant && count == 1 && inBlurGarden) {
    plantContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    btnPlant.classList.add("active");
    btnPlant.classList.remove("noactive");
    inBlurPlant = true;
    ++count;
    console.log(count);
  } else if (!inBlurPlant && count == 1 && inBlurLawn) {
    plantContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    btnPlant.classList.add("active");
    btnPlant.classList.remove("noactive");
    inBlurPlant = true;
    ++count;
    console.log(count);
  } else if (inBlurPlant && count == 2) {
    plantContainer.forEach((item) => {
      item.classList.remove("noblur");
      item.classList.add("blur");
    });
    btnPlant.classList.add("noactive");
    btnPlant.classList.remove("active");
    inBlurPlant = false;
    --count;
    console.log(count);
  } else if (inBlurPlant && count == 1) {
    lawnContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    gardenContainer.forEach((item) => {
      item.classList.add("noblur");
      item.classList.remove("blur");
    });
    btnPlant.classList.add("noactive");
    btnPlant.classList.remove("active");
    inBlurPlant = false;
    --count;
    console.log(count);
  }
});

const btnOrder = document.querySelectorAll(".summary-btn");

btnOrder.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log("order");
    event.stopPropagation();
    document.location = "#contacts";
  });
});

const btnAccordeon = document.querySelectorAll(".details-container");
let countItem = 0;
btnAccordeon.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (
      !e.target.parentElement.classList.contains("details-container-show") &&
      countItem == 0
    ) {
      e.target.parentElement.classList.add("details-container-show");
      ++countItem;
      console.log(countItem);
    } else if (
      e.target.parentElement.classList.contains("details-container-show") &&
      countItem == 1
    ) {
      e.target.parentElement.classList.remove("details-container-show");
      --countItem;
      console.log(countItem);
    } else if (
      !e.target.parentElement.classList.contains("details-container-show") &&
      countItem == 1
    ) {
      btnAccordeon.forEach((elem) => {
        elem.classList.remove("details-container-show");
      });
      e.target.parentElement.classList.add("details-container-show");
    }
  });
});

const dropdownArrow = document.querySelector(".dropdown-arrow");
const dropdown = document.querySelector(".dropdown");
const dropdownContainer = document.querySelector(".dropdown-container");
const dropdownList = document.querySelector(".dropdown-list");
const selectItem = document.querySelectorAll(".dropdown-list li");
const textLabel = document.querySelector(".selLabel");
const cityCard = document.querySelectorAll('.city-card')
dropdownArrow.addEventListener("click", () => {
  dropdown.classList.toggle("active");
  dropdownArrow.classList.toggle("active");
  dropdownContainer.classList.toggle("active");
  dropdownList.classList.toggle("active");
  cityCard.forEach((it) => {
    it.classList.remove('active')
    
  })
});
selectItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    console.log(event.target.parentElement.dataset.value)
    
    let textOfItem = event.target.innerText;
    textLabel.innerHTML = textOfItem;
    dropdown.classList.remove("active");
    dropdownArrow.classList.remove("active");
    dropdownContainer.classList.remove("active");
    dropdownList.classList.remove("active");
    dropdownContainer.classList.add('active-city')
    cityCard.forEach((it) => {
      if(event.target.parentElement.dataset.value === it.dataset.value){
        it.classList.toggle('active')
      }
    })
    
  });
});
  
}


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

