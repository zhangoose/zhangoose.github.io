console.log("hi, face.js");

$(".icon").mouseover(function(){
	$(".icon").attr("src","img/8.png");
});

$(".icon").mouseout(function(){
	$(".icon").attr("src","img/1.png");
});

$(document).on("mousemove",function(event){
	console.log("X: " + event.pageX);
	onsole.log("Y: " + event.pageY);
});
