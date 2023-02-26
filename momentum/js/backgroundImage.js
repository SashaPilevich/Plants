import { getTimeOfDay } from "./greeting.js";
import { getRandomNum } from "./helpers/randomNum.js";
export const body = document.body;
const nextSlide = document.querySelector(".slide-next");
const prevSlide = document.querySelector(".slide-prev");
let randomNum = getRandomNum(1, 20);

export const radioGit = document.querySelector("#github");
const radioUnsplash = document.querySelector("#unsplash");
const radioFlickr = document.querySelector("#flickr");
const searchImage = document.querySelector(".additional-image-source");
let currentBackground = radioGit.value;
let additionalTag;

export const chooseImageSource = (currentBackground, additionalTag) => {
  if (currentBackground == "github") {
    setBg();
  } else if (currentBackground == "unsplash") {
    getBkgFromUnsplash(additionalTag);
  } else if (currentBackground == "flickr") {
    getBkgFromFlickr(additionalTag);
  }
};
radioGit.addEventListener("change", (event) => {
  currentBackground = event.target.value;
  chooseImageSource(currentBackground);
  searchImage.style.opacity = "0";
});
radioUnsplash.addEventListener("change", (event) => {
  additionalTag = ''
  searchImage.value = ''
  currentBackground = event.target.value;
  chooseImageSource(currentBackground, additionalTag);
  searchImage.style.opacity = "1";
});
radioFlickr.addEventListener("change", (event) => {
  additionalTag = ''
  searchImage.value = ''
  currentBackground = event.target.value;
  chooseImageSource(currentBackground, additionalTag);
  searchImage.style.opacity = "1";
});
searchImage.addEventListener("keypress", setImage);
function setImage(event) {
  if (event.code === "Enter") {
    searchImage.blur();
  }
}
searchImage.addEventListener("change", (event) => {
  additionalTag = event.target.value;
  chooseImageSource(currentBackground, additionalTag);
});

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

export const getBkgFromUnsplash = async (tag = getTimeOfDay()) => {
  if (tag == "") {
    tag = getTimeOfDay();
  }
  const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${tag}&client_id=lHFy1AnWTiVRkvDHpaJeUw3XLy14iGMRKQTMEfZ9xfA`;
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  img.src = data.urls.regular;
  img.onload = () => {
    body.style.backgroundImage = `url('${data.urls.regular}')`;
  };
};

export const getBkgFromFlickr = async (tag = getTimeOfDay()) => {
  if (tag == "") {
    tag = getTimeOfDay();
  }
  const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=7e949e017513c65764cf0a94decb86da&tags=${tag}&sort=relevanse&per_page=200&extras=url_h&format=json&nojsoncallback=1`;
  const res = await fetch(url);
  const data = await res.json();
  const img = new Image();
  let num = getRandomNum(1, 200);
  img.src = data.photos.photo[num].url_h;
  img.onload = () => {
    body.style.backgroundImage = `url('${data.photos.photo[num].url_h}')`;
  };
};
const getSlideNext = () => {
  if (randomNum < 20) {
    ++randomNum;
  } else {
    randomNum = 1;
  }
  chooseImageSource(currentBackground, additionalTag);
};
const getSlidePrev = () => {
  if (randomNum <= 20 && randomNum != 1) {
    --randomNum;
  } else {
    randomNum = 20;
  }
  chooseImageSource(currentBackground, additionalTag);
};
nextSlide.addEventListener("click", getSlideNext);
prevSlide.addEventListener("click", getSlidePrev);
