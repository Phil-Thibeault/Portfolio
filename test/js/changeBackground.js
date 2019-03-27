$(document).ready(function(){
	var imgBackground = $('.img-link').css('background-image');
	console.log(imgBackground);
	$('.img-link').mouseover(function(){
    	$(this).css('background', 'green');
	}).mouseout(function(){
    	$(this).css('background', imgBackground);
	});
});