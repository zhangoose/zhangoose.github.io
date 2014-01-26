console.log("hi, face.js");

$(".icon").mouseover(function(){
	$(".icon").attr("src","img/8.png");
});

$(".icon").mouseout(function(){
	$(".icon").attr("src","img/1.png");
});

$("#title").mouseover(function(){
	console.log("Yaaaaaaaaaaaaaaaaaaaaaaay");
	$(".icon").attr("src","img/2.png");
});

$("#title").mouseout(function(){
	$(".icon").attr("src","img/1.png");
});

$(document).on("mousemove",function(event){
	//console.log("X: " + event.pageX);
	//console.log("Y: " + event.pageY);
});
