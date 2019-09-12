var presidents = ["Barack Obama", "George W. Bush", "Bill Clinton", "Jimmy Carter"];

function displayPresidentInfo() {

  var president = $(this).attr("data-name");
  var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=ugWOWOZbOIs5AcEvCHRPRixd5gWW10Rq&q=" + president + "&limit=5&offset=0&rating=PG-13&lang=en";

  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    var presDiv = $("<div class='president'>");

    var imgRating = response.data[0].rating;

    var firstP = $("<p>").text("Rated: " + imgRating);

    presDiv.append(firstP);

    var imgUrl = response.data[0].images.url;

    var image = $("<img>").attr("src", imgUrl);

    presDiv.append(image);

    $("#presidential-view").prepend(presDiv);
  });

};

function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < presidents.length; i++) {
    var newPres = $("<button>");
    newPres.addClass("president-btn");
    newPres.attr("data-name", presidents[i]);
    newPres.text(presidents[i]);
    $("#buttons-view").append(newPres);
  }
}

$("#add-president").on("click", function (event) {
  event.preventDefault();
  var president = $("#president-input").val().trim();
  presidents.push(president);
  renderButtons();
});

$(document).on("click", ".president-btn", displayPresidentInfo);

renderButtons();






