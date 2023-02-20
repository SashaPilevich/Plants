import { getTimeOfDay } from "./greeting.js";
import { getRandomNum } from "./helpers/randomNum.js";
export const body = document.body;
const nextSlide = document.querySelector(".slide-next");
const prevSlide = document.querySelector(".slide-prev");
let randomNum = getRandomNum();

export const setBg = () => {
  let timeOfDay = getTimeOfDay();
  if (randomNum < 10) {
    randomNum = String(randomNum).padStart(2, 0);
  }
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/SashaPilevich/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg`;
  img.onload = () => {
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/SashaPilevich/stage1-tasks/assets/images/${timeOfDay}/${randomNum}.jpg')`;
  };
};
setBg();
const getSlideNext = () => {
  if (randomNum < 20) {
    ++randomNum;
  } else {
    randomNum = 1;
  }
  setBg();
};
const getSlidePrev = () => {
  if (randomNum <= 20 && randomNum != 1) {
    --randomNum;
  } else {
    randomNum = 20;
  }
  setBg();
};
nextSlide.addEventListener('click', getSlideNext);
prevSlide.addEventListener('click', getSlidePrev);
