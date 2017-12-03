 $(document).ready(function() {
 	fadeInBack();
});


var fadeInBack = function(){
	$('.background-image').animate({ opacity: 1 }, { duration:1500 });
	// $('.background-image').promise().done(function(){
	// 	fadeInButtons();
	// });
	setTimeout(function(){
    	fadeInTitle();
	}, 1500);
}
var fadeInTitle = function(){
	$('.title').animate({ opacity: 1 }, { duration:1500 });
 	setTimeout(function(){
    	fadeInButtons();
	}, 1500);
}

 var fadeInButtons = function(){
 	$(".button-rows").animate({opacity: 1}, {duration: 1500 });
 }

