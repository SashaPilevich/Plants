import { showDate } from "./date.js";
import { showGreeting } from "./greeting.js";
export const time = document.querySelector('.time');
export const showTime = () => {
  const date  = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  showDate()
  showGreeting()
  setTimeout(showTime,1000)
}
showTime()