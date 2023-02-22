import { getRandomNum } from  "./helpers/randomNum.js"
const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')

export async function getQuotes(randomNum=getRandomNum(0,9)) {  
  const quotes = 'assets/quotes.json';
  const response = await fetch(quotes);
  const data = await response.json(); 
  quote.textContent = `"${data[randomNum].text}"`;
  author.textContent = data[randomNum].author;
}
changeQuote.addEventListener('click',()=>{
  getQuotes()
})