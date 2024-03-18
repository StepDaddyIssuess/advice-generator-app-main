"use strict";

const adviceQuotes = [
    "Always strive for simplicity in your code.",
    "Document your code as if the person maintaining it is a psychopath who knows where you live.",
    "Don't repeat yourself. Keep your code DRY (Don't Repeat Yourself).",
    "Learn from your mistakes, but more importantly, learn from the mistakes of others.",
    "Write code for clarity first, optimization second.",
    "Understand the problem thoroughly before attempting to solve it with code.",
    "Take breaks. Sometimes stepping away from the problem leads to better solutions.",
    "Stay curious. Keep learning new technologies and techniques.",
    "Consistency is key. Follow coding standards and conventions.",
    "Test your code thoroughly. Automated tests save time and prevent headaches.",
    "Refactor mercilessly. Leave the codebase cleaner than you found it.",
    "Be mindful of performance, but prioritize readability and maintainability.",
    "Collaborate and communicate with your team. Good code is a team effort.",
    "Stay humble. There's always something new to learn or improve upon.",
    "Embrace feedback. Constructive criticism helps you grow as a developer.",
    "Don't reinvent the wheel. Utilize existing libraries and frameworks when appropriate.",
    "Plan for scalability. Design your code to accommodate future growth.",
    "Keep your dependencies up to date. Regular updates help maintain security and compatibility.",
    "Write code that you'd be proud to show others.",
    "Code with empathy. Consider the end users and your fellow developers.",
  ];

// Created a random number 
// the random number is the index of the quote 

function randomNumber(){
  return Math.floor(Math.random() * adviceQuotes.length);
}


let quoteCounter = 0;
document.querySelector(".dice").addEventListener("click", function(){
  let randomQuote = adviceQuotes[randomNumber()];
  document.querySelector(".advice-content").innerHTML = randomQuote;

  quoteCounter++;
  document.querySelector("#advice-number").innerHTML = quoteCounter;
})

