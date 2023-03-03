export const getRandomNum = (min, max) => {
  let minNum = Math.ceil(min);
  let maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
}