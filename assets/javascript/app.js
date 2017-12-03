var fadeTime = 200; 
var key = "TCkHB8NLpmc7rzlLBXdRPtPUx9FaVEKx";
var searchItems = ["Sunglasses", "Machine Gun", "Napping", "Yarn", "Startled", "Snow", "Box", "Lightsaber", "Cup", "Laser"]

$(document).ready(function() {
 	// fadeInBack(fadeTime);
 	updateHeight();
 	setButtons();
 	fadeIn(fadeTime, 1, ".background-image");

 	setTimeout(function(){
 		fadeIn(fadeTime, 1, ".title");
 	}, fadeTime);

 	setTimeout(function(){
 		fadeIn(fadeTime, .75, ".remainder")
 	}, fadeTime * 2);
});

$(window).resize(function(){
	updateHeight();
});

var setButtons = function(){
	for (var i = 0; i < searchItems.length; i++){
		var noSpace = searchItems[i].replace(/ /g, "-");
		var div = "<button class='button-option btn btn-lg btn-primary' id='" + noSpace + "' onclick='buttonEvent(id)'>" + searchItems[i] + "</button>"
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
	console.log(id);
	var divToAppend = "<button class='button-option btn btn-lg btn-primary' id='" + id + "' onclick='buttonEvent(id)'>" + id + "</button>"
	buttonAnimate(divToAppend, id, fadeTime);
	buttonReturn(divToAppend, id, fadeTime);
	giphySearch(id);
}

var buttonAnimate = function(div, element, time) {
	$("#"+element).remove();
	$(".insertion-div").append(div);
	$("#"+element)
	.animate({left: "63%"}, {queue: false, duration: time})
	.animate({top: "50%"}, time);
	setTimeout(function(){
	$("#"+element).animate({opacity: 0}, time)
	}, time);
	setTimeout(function(){
	$("#"+element).remove();
	}, time * 2)
}

var buttonReturn = function(div, element, time) {
	setTimeout(function(){
		$(".button-rows").append(div);
	}, time * 2)
}

var giphySearch = function(id) {
	var URL = "https://api.giphy.com/v1/gifs/search?api_key=" + key + "&q=cat " + id + "&limit=25&offset=0&lang=en";
	$.ajax({
      url: URL,
      method: "GET"
    }).done(function(response) {
    	// console.log(response);
    	// console.log(response.data[1].rating);
    	getPicture(rng(), response);
    	// displayPicture();
	})
}

var rng = function(){
	var rng = Math.floor(Math.random() * (25) + 1);
	return rng;
}

var getPicture = function(rng, response){
	// console.log(rng);
	// console.log(response);
	var pictureURL = response.data[rng].url;
	var pictureRating = response.data[rng].rating;
	var newDiv = 
	$(".area-append-images").append("<img src='" + pictureURL + "' class='appended-image'>")
}