// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {

  function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
  }

  function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('body').append('<img src=' + srcURL + '>');
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
        var url = response.data[Math.floor(Math.random()*response.data.length)].images.original.url;
        appendImageToBody(url);
      },
    });
  }

  //Add a click handler beloe to call the function when the button is clicked
  $("button").click(function() {
    var searchTerm = $("#srch-term").val();
    var searchTerm2 = $("#srch-term2").val();
    var searchTerm3 = searchTerm + searchTerm2;

    callGiphyAPIWithSearchTerm(searchTerm);
    callGiphyAPIWithSearchTerm(searchTerm2);
    callGiphyAPIWithSearchTerm(searchTerm3);
    
  });


});
