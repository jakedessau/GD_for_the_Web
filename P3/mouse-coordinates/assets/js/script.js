$(document).ready(function(){
	$('body').mousemove(function(e){
		$('#position').html('Position X : ' + e.pageX + '<br />Position Y : ' + e.pageY);
		// try switching the 'top' and 'left' values
		$('#position').css({ 'top': e.pageY+'px', 'left': e.pageX+'px' });
	});
});