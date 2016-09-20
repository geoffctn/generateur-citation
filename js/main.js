var listQuotes = [
    {quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha"},
    {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", author: "Albert Einstein"},
    {quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.", author: "Bernard M. Baruch"},
    {quote: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero"},
    {quote: "You only live once, but if you do it right, once is enough.", author: "Mae West"},
    {quote: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi"},
    {quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.", author: "J.K. Rowling, Harry Potter and the Goblet of Fire"},
    {quote: "No one can make you feel inferior without your consent.", author: "Eleanor Roosevelt, This is My Story"},
    {quote: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain"},
    {quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.", author: "William W. Purkey"},
    {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"}
];

var currentQuote = 0;
var progress = setInterval(timerProgress, 40);
var progressWidth = 0;

// var timeDisplayed = 10000;
// var timer = setInterval(changeQuote, timeDisplayed);

function timerProgress() {
  $(".quote-progress").width(progressWidth + "%");
  if(progressWidth < 100) {
    progressWidth += 0.1;
  } else {
    changeQuote();
    progressWidth = 0;
  }
}

function setQuote() {
  $(".quote").html('"' + listQuotes[currentQuote].quote + '"');
  $(".author-name").html(listQuotes[currentQuote].author);
  tweetQuote();
}

function getRandomQuote() {
  currentQuote = Math.round(Math.random() * (listQuotes.length));
  setQuote();
}

function changeQuote() {
  // $("blockquote").fadeToggle( "slow", "linear" );
  if(currentQuote < listQuotes.length - 1){
    currentQuote++;
  } else {
    currentQuote = 0;
  }
  setQuote();
}

$(".previous").click(function() {
  if(currentQuote > 0){
    currentQuote--;
  } else {
    currentQuote = listQuotes.length - 1;
  }
  setQuote();
  progressWidth = 0;
});

$(".next").click(function() {
  changeQuote();
  progressWidth = 0;
});

$(".random").click(function() {
  getRandomQuote();
  progressWidth = 0;
});

/* Twitter API */
window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));

function tweetQuote() {
  $('#quote-tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quote,inspiration&text=' + encodeURIComponent('"' + listQuotes[currentQuote].quote + '" ' + listQuotes[currentQuote].author));
}

setQuote();