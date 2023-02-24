export const changeVolumeProgressBar = (event) => {
  const min = event.min;
  const max = event.max;
  const value = event.value;
  event.style.backgroundSize = ((value - min) * 100) / (max - min) + "% 100%";
};