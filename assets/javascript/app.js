var fadeTime = 200; 
var key = "TCkHB8NLpmc7rzlLBXdRPtPUx9FaVEKx";
var searchItems = ["Sunglasses", "Machine Gun", "Napping", "Yarn", "Startled", "Snow", "Box", "Lightsaber", "Cup", "Laser"]

$(document).ready(function() {
 	updateHeight();
 	setButtons();
 	fadeIn(fadeTime, 1, ".background-image");

 	setTimeout(function(){
 		fadeIn(fadeTime, 1, ".title");
 	}, fadeTime);

 	setTimeout(function(){
 		fadeIn(fadeTime, .75, ".remainder")
 	}, fadeTime * 2);

 	 $("#search-button").on('click', function(event) {
        event.preventDefault();
        pushButton();
      });

 	$("#input-box").keyup(function(event) {
    	if (event.keyCode === 13) {
		    event.preventDefault();
		    pushButton();
    	}
	});

	$("#clear-button").on('click', function(){
		$(".area-append-images").empty();
	});

});

var pushButton = function() {
	var item = $("#input-box").val().trim();
	if (item === ""){
		return;
	}
	searchItems.push(item);
	setButtons();
	$("#input-box").val("");

}

$(window).resize(function(){
	updateHeight();
});

var setButtons = function(){
	$(".button-rows").empty();
	for (var i = 0; i < searchItems.length; i++){
		var noSpace = searchItems[i].replace(/ /g, "-");
		var capitalized = searchItems[i].charAt(0).toUpperCase() + searchItems[i].slice(1);
		var div = "<button class='button-option btn btn-lg btn-primary' id='" + noSpace + "' onclick='buttonEvent(id)'>" + capitalized + "</button>"
		$(".button-rows").append(div);
	}
}

var updateHeight = function(){
	var height = ($(".insertion-div").width())*.625;
	$(".insertion-div").css('height', height);
}

var fadeIn = function(time, opacity, element){
	$(element).animate({ opacity: opacity }, { duration: time });
}

var buttonEvent = function(id){
	var divToAppend = "<button class='button-option btn btn-lg btn-primary' id='" + id + "' onclick='buttonEvent(id)'>" + id + "</button>"
	buttonAnimate(divToAppend, id, fadeTime);
	buttonReturn(divToAppend, id, fadeTime);
	giphySearch(id);
}

var buttonAnimate = function(div, element, time) {
	$("#"+element).remove();
	$(".insertion-div").append(div);
	var halfTime = time/2
	$("#"+element)
	.animate({left: "63%"}, {queue: false, duration: halfTime})
	.animate({top: "50%"}, halfTime);
	setTimeout(function(){
	$("#"+element).animate({opacity: 0}, halfTime)
	}, halfTime);
	setTimeout(function(){
	$("#"+element).remove();
	}, halfTime * 2)
}

var buttonReturn = function(div, element, time) {
	setTimeout(function(){
		$(".button-rows").append(div);
	}, time)
}

var giphySearch = function(id) {
	var URL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=cat " + id + "&limit=10&offset=0&lang=en";
	$.ajax({
      url: URL,
      method: "GET"
    }).done(function(response) {
    	appendDivs(rng(), response);
	})
}

var rng = function(){
	var rng = Math.floor(Math.random() * (9) + 1);
	return rng;
}

var appendDivs = function(rng, response){
	var pictureURL = response.data[rng].images.original_still.url;
	var pictureRating = response.data[rng].rating;
	var newImg = '<img src="' + pictureURL + '" class="appended-image" state="still" data-animate= "' + response.data[rng].images.original.url +'"" data-still="' + response.data[rng].images.original_still.url +'" alt="GIF">';
	var ratingDiv = "<div class='ratings-div'>Rating: " + response.data[rng].rating + "</div>";
	displayGif(newImg, ratingDiv, response);
}

var displayGif = function(img, rating, response) {
	$(".area-append-images").append(img);
	$(".area-append-images").append(rating);

	$(".appended-image").unbind('click').on('click', function() {
		var state = $(this).attr("state");
		console.log("outside state "+ state);
		if (state === "still") {
		 	$(this).attr("src", $(this).attr("data-animate"));
		 	$(this).attr("state", "animate");
		} 
		else if (state === "animate") {
			$(this).attr("src", $(this).attr("data-still"));
			$(this).attr("state", "still");
	  	}
	});
}