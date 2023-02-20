export const dateInApp = document.querySelector('.date');

export const showDate = () => {
  const date = new Date();
  const options = {weekday: 'long',day:'numeric', month:'long'}
  const currentDate = date.toLocaleDateString('en-US',options)
  dateInApp.textContent = currentDate;
}
