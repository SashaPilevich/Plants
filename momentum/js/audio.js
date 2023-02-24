import { playList } from "./playList.js";
import { formatTime } from "./helpers/formatTime.js";
import { changeVolumeProgressBar } from "./helpers/changeVolumeProgressBar.js";
const audio = document.querySelector("audio");
const btnPlay = document.querySelector(".play");
const btnNext = document.querySelector(".play-next");
const btnPrev = document.querySelector(".play-prev");
const playListContainer = document.querySelector(".play-list");
const playTitle = document.querySelector(".play-title");
const playDurationTime = document.querySelector(".play-duration-time");
const playCurrentTime = document.querySelector(".play-current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector("#volume");
const volumeBtn = document.querySelector(".volume-icon");

let isPlay = false;
let isMute = false;
let playNum = 0;
let currentNum = -1;
let defaultVolumeValue = "30";
audio.volume = "0.5";

playTitle.textContent = playList[playNum].title;
playDurationTime.innerHTML = playList[playNum].duration;

export const playPauseAudio = () => {
  if (!isPlay) {
    playAudio();
  } else {
    pauseAudio();
  }
};

const playAudio = () => {
  if (currentNum !== playNum) {
    audio.src = playList[playNum].src;
    currentNum = playNum;
    audio.currentTime = 0;
  }
  removeActivePlay();
  btnPlay.classList.add("pause");
  showActiveAudio();
  audio.play();
  playTitle.textContent = playList[playNum].title;
  playDurationTime.innerHTML = playList[playNum].duration;
  isPlay = true;
};
const pauseAudio = () => {
  removeActivePlay();
  btnPlay.classList.remove("pause");
  audio.pause();
  isPlay = false;
};

const playNext = () => {
  isPlay = false;
  if (playNum < 3) {
    ++playNum;
  } else {
    playNum = 0;
  }
  playAudio();
};
const playPrev = () => {
  isPlay = false;
  if (playNum <= 3 && playNum != 0) {
    --playNum;
  } else {
    playNum = 3;
  }
  playAudio();
};

playList.forEach((el, index) => {
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.classList.add("play-btn");
  btn.classList.add("player-icon-btn");
  li.textContent = el.title;
  li.classList.add("play-item");
  li.append(btn);
  playListContainer.append(li);
  btn.addEventListener("click", function (event) {
    let button = event.target;
    if (button.classList.contains("pause")) {
      pauseAudio();
      button.classList.remove("pause");
    } else {
      playNum = index;
      removeActivePlay();
      playAudio();
      button.classList.add("pause");
    }
  });
});

const showActiveAudio = () => {
  let playList = document.querySelectorAll(".play-item");
  playList.forEach((el, index) => {
    if (index === playNum) {
      el.classList.add("item-active");
      el.children[0].classList.add("pause");
    } else {
      el.classList.remove("item-active");
    }
  });
};
const removeActivePlay = () => {
  let playList = document.querySelectorAll(".player-icon-btn");
  playList.forEach((el) => {
    el.classList.remove("pause");
  });
};

setInterval(() => {
  if (audio.currentSrc) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    playCurrentTime.textContent = formatTime(audio.currentTime);
    changeVolumeProgressBar(progressBar);
  }
}, 100);
progressBar.addEventListener("input", () => {
  if (audio.currentSrc) {
    audio.currentTime = (audio.duration * progressBar.value) / 100;
  }
});
volume.addEventListener("input", (event) => {
  if (volume.value === "0") {
    volumeBtn.classList.add("mute");
  } else {
    volumeBtn.classList.remove("mute");
  }
  audio.volume = volume.value / 100;
  changeVolumeProgressBar(event.target);
});

volumeBtn.addEventListener("click", () => {
  if (!isMute) {
    volumeBtn.classList.add("mute");
    volume.value = "0";
    audio.volume = 0.0;
    isMute = true;
  } else {
    volumeBtn.classList.remove("mute");
    isMute = false;
    audio.volume = defaultVolumeValue / 100;
    volume.value = defaultVolumeValue;
  }
  changeVolumeProgressBar(volume);
});

btnPlay.addEventListener("click", playPauseAudio);
btnNext.addEventListener("click", playNext);
btnPrev.addEventListener("click", playPrev);
audio.addEventListener("ended", playNext);
