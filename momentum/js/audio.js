import { playList } from "./playList.js";
const audio = document.querySelector("audio");
const btnPlay = document.querySelector(".play");
const btnNext = document.querySelector(".play-next");
const btnPrev = document.querySelector(".play-prev");
const playListContainer = document.querySelector(".play-list");
const playTitle = document.querySelector(".play-title");
const playDurationTime = document.querySelector(".play-duration-time");
const playCurrentTime = document.querySelector(".play-current-time");
const progressBar = document.querySelector("#progress-bar");
const volume = document.querySelector('#volume');
const volumeBtn = document.querySelector('.volume-icon')
let isMute = false


let playNum = 0;
let isPlay = false;
let currentNum = -1;
playTitle.textContent = playList[playNum].title;
playDurationTime.innerHTML = playList[playNum].duration;
audio.volume = '0.5'

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
  audio.play();
  removeActivePlay();
  isPlay = true;
  btnPlay.classList.add("pause");
  showActiveAudio();
  playTitle.textContent = playList[playNum].title;
  playDurationTime.innerHTML = playList[playNum].duration;
};
const pauseAudio = () => {
  removeActivePlay();
  audio.pause();
  isPlay = false;
  btnPlay.classList.remove("pause");
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
  btn.addEventListener("click", function (e) {
    let button = e.target;
    if (button.classList.contains("pause")) {
      pauseAudio();
      button.classList.remove("pause");
    } else {
      removeActivePlay();
      playNum = index;
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
function formatTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${min}:${sec}`;
}
setInterval(() => {
  if (audio.currentSrc) {
    progressBar.value = (audio.currentTime / audio.duration) * 100;
    playCurrentTime.textContent = formatTime(audio.currentTime);
    changeVolumeProgressBar(progressBar)
  }
}, 100);
progressBar.addEventListener("input", (e) => {
  if (audio.currentSrc) {
    audio.currentTime = (audio.duration * progressBar.value) / 100;
  }
});
volume.addEventListener('input', e => {
  if (volume.value === '0') {
     volumeBtn.classList.add('mute');
  } else {
     volumeBtn.classList.remove('mute');
  }

  audio.volume = volume.value / 100;
  changeVolumeProgressBar(e.target);
})
let defaultVolumeValue = '30'
// volume.value = lastVolumeValue
volumeBtn.addEventListener('click',() => {
  if(!isMute){
    volumeBtn.classList.add('mute')
    volume.value = '0'
    audio.volume = 0.0

    isMute=true
  }else{
    volumeBtn.classList.remove('mute')
    isMute=false
    audio.volume = defaultVolumeValue / 100;
    volume.value = defaultVolumeValue;
  }
   changeVolumeProgressBar(volume)
  })
const changeVolumeProgressBar = (event) =>{
  const min = event.min;
  const max = event.max;
  const val = event.value;

  event.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}
btnPlay.addEventListener("click", () => {
  playPauseAudio();
});
btnNext.addEventListener("click", playNext);
btnPrev.addEventListener("click", playPrev);
audio.addEventListener("ended", playNext);
