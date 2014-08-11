$(document).keydown(function(event){
	if(event.which == 39){ // 39 - right
		console.log("right");	
		return;
	}//end of if 
	else if(event.which == 37){ // 37 - left
		console.log("left");
		return;
	}//end of else if 
});

$(document).ready(function(){
	$("#obj_projects").hide();
	$("#obj_todo").hide();
	$("#obj_doodles").hide();
	$("#obj_classes").hide();


	var opt_to_id = {"About":"obj_about",
		"Projects":"obj_projects",
"Classes":"obj_classes",
"Doodles":"obj_doodles",
"To-do":"obj_todo"
	};

	$(".nav").click(function(event){
		var opt =  $(this).text().replace(/^\s+|\s+$/g, '');
		$(".nav").css("background-color","white");
		$(this).css("background-color","#D1CCCC");
		var opt_id = "#" + opt_to_id[opt];
		console.log("opt is " + opt + " & id is " + opt_id);

		$("#obj_about").hide();
		$("#obj_projects").hide();
		$("#obj_todo").hide();
		$("#obj_doodles").hide();
		$("#obj_classes").hide();

		$(opt_id).show();
		console.log("opt_id display is : " + $(opt_id).css("display"));

	});//end of nav click
});//end of document ready
