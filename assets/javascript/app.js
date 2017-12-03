var fadeTime = 1500; 
$(document).ready(function() {
 	fadeInBack(fadeTime);
});


var fadeInBack = function(time){
	$('.background-image').animate({ opacity: 1 }, { duration: time });
	setTimeout(function(){
    	fadeInTitle(time);
	}, time);
}
var fadeInTitle = function(time){
	$('.title').animate({ opacity: 1 }, { duration: time });
 	setTimeout(function(){
    	fadeInRemainder(time);
    	fadeInText(time);
	}, time);
}

 var fadeInRemainder = function(time){
 	$(".remainder").animate({opacity: .75}, {duration: time });
 }

 var fadeInText = function(time){
 	$("#input-joke").animate({opacity: 1}, {duration: time});
 }

