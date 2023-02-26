import { getLocalStorage } from "./helpers/localStorage.js"
import { getRandomNum } from  "./helpers/randomNum.js"
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')

export async function getQuotes(currentLanguage="en",randomNum=getRandomNum(0,9)) {  
  currentLanguage = getLocalStorage('language')
  const quotes = 'assets/quotes.json';
  const response = await fetch(quotes);
  const data = await response.json(); 
  quote.textContent = `"${data[randomNum][currentLanguage].text}"`;
  author.textContent = data[randomNum][currentLanguage].author;
}
changeQuote.addEventListener('click',()=>{
  getQuotes()
})
