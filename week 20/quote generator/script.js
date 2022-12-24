const text = document.querySelector('.quote-container__quote');
const author = document.querySelector('.quote-container__author');
const btn = document.querySelector('.quote-container__button');

getNewQuote = async() => {
const response = await fetch('https://type.fit/api/quotes');
let allQuotes = await response.json();

let indx = Math.floor(Math.random()*allQuotes.length);
let quote = allQuotes[indx].text;
let creator = allQuotes[indx].author;

if(creator==null) {
    author = "Anonymous";
}

text.innerHTML = quote;
author.innerHTML = "by " + creator;
}

getNewQuote();