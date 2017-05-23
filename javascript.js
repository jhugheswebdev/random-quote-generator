$(document).ready(function() {
  getQuote();

  var randomQuote;
//  var randomNum;
  var author;
  function getQuote() {
    var url="http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data) {
      quote = data.quoteText;
      author = data.quoteAuthor;
    $(".quote").html(quote);
    $(".author").html("- " + author);
  /*  var quotes = ["Hello World", "Hello Sea", "Hello Sky"];
    var author1 = ["- Author1", "- Author2", "- Author3"];

    randomNum = Math.floor(Math.random()*quotes.length);
    randomQuote = quotes[randomNum];
    author = author1[randomNum];
    $(".quote").text(randomQuote);
    $(".author").text(author);
    */
  });

}

$("#tweetQuote").on("click", function(){
  window.open("https://twitter.com/intent/tweet?text=" + quote + " - " + author);
});

$("#newQuote").on("click", function() {
  getQuote();
});
});
