	$(document).ready(function(){
grid_size = 100;

$(" .box ")
  .draggable({ grid: [ grid_size, grid_size ] })

  .resizable({ grid: grid_size * 2 })
	
	.on("mouseover", function(){
  	$( this ).addClass("move-cursor")
	})

	.on("mousedown", function(){
  	$( this )
      .removeClass("move-cursor")
      .addClass("grab-cursor")
      .addClass("opac");
  
  	$(" .text ").hide();
  
	})

	.on("mouseup", function(){
  	$( this )
      .removeClass("grab-cursor")
      .removeClass("opac")
      .addClass("move-cursor");
	});


});