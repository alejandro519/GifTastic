var presidents = ["Barack Obama", "George W. Bush", "Bill Clinton", "Jimmy Carter"];


function displayPresidentInfo(){

  var president = $(this).attr("data-name");
  var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=ugWOWOZbOIs5AcEvCHRPRixd5gWW10Rq&q=" + president + "&limit=5&offset=0&rating=PG-13&lang=en";

  
  
  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var presDiv = $("<div class='president'>");

    var imgRating = response.data[0].rating;

    var firstP = $("<p>").text("Rated: " + imgRating);

    presDiv.append(firstP);

    var imgUrl = response.data[0].images.url;

    var image = $("<img>").attr("src", imgUrl);

    presDiv.append(image);

    $("presidential-view").prepend(presDiv);
});

};


function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < presidents.length; i++) {
    var newPres = $("<button>");
    newPres.addClass("president-btn");
    // Adding a data-attribute with a value of the movie at index i
    newPres.attr("data-name", presidents[i]);
    // Providing the button's text with a value of the movie at index i
    newPres.text(presidents[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(newPres);
  }
}

// This function handles events where one button is clicked
$("#add-president").on("click", function(event) {
  // event.preventDefault() prevents the form from trying to submit itself.
  // We're using a form so that the user can hit enter instead of clicking the button if they want
  event.preventDefault();

  // This line will grab the text from the input box
  var president = $("#president-input").val().trim();
  // The movie from the textbox is then added to our array
  presidents.push(president);
  // calling renderButtons which handles the processing of our movie array
  renderButtons();
});

$(document).on("click", ".president-btn", displayPresidentInfo);

// Calling the renderButtons function to display the intial buttons
renderButtons();
// Calling the renderButtons function at least once to display the initial list of movies





