const quotes = [
  {
    quote: `You only live once, but if you do it right, once is enough.`,
    author: `- Mae West`,
  },
  {
    quote: `If you want to live a happy life, tie it to a goal, not to people or things.`,
    author: `- Albert Einstein`,
  },
  {
    quote: `Never let the fear of striking out keep you from playing the game.`,
    author: `- Babe Ruth`,
  },
  {
    quote: `Your time is limited, so don’t waste it living someone else’s life.`,
    author: `- Steve Jobs`,
  },
  {
    quote: `In order to write about life first you must live it.`,
    author: `- Ernest Hemingway`,
  },
  {
    quote: `Life is not a problem to be solved, but a reality to be experienced.`,
    author: `- Soren Kierkegaard`,
  },
  {
    quote: `The unexamined life is not worth living.`,
    author: `- Socrates`,
  },
  {
    quote: `Turn your wounds into wisdom.`,
    author: `- Oprah Winfrey`,
  },
  {
    quote: `The purpose of our lives is to be happy.`,
    author: `- Dalai Lama`,
  },
  {
    quote: `Live for each second without hesitation.`,
    author: `- Elton John`,
  },
];

let btn = document.querySelector("#btn");
let quote = document.querySelector(".quote");
let author = document.querySelector(".author");

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;

  author.innerHTML = quotes[random].author;
});

// Function copyText from icon
function copyToClipboard() {
  navigator.clipboard.writeText(document.getElementById("copyText").innerText);
}


// Like Btn Heart
let likebtn = document.getElementById("likebtn");
function likeBtn() {
  if (likebtn.classList.contains("far")) {
    likebtn.classList.remove("far");
    likebtn.classList.add("fas");
  } else {
    likebtn.classList.remove("fas");
    likebtn.classList.add("far");
  }
}
