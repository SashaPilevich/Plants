export const getRandomNum = () => {
  let min = Math.ceil(1);
  let max = Math.floor(20);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}