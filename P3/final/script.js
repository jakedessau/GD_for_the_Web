$(document).ready(function(){

$(function() {
	$( ".my-special-div" ).draggable();
});

$('.my-special-div').mouseenter(function() {
     $('.blue-square').fadeOut();
});

$('.my-special-div').mouseleave(function() {
     $('.blue-square').fadeIn();
});

});