
$(document).ready(function() {
$("#para").hide();
$("#circle").mouseover(function() {
$("#para").show(1000);
});

});

$(document).ready(function(){
$("#red").click(function(){
$(".body").css("background-color","red");
});
$("#brown").click(function(){
$(".body").css("background-color","brown");
});
$("#yellow").click(function(){
$(".body").css("background-color","yellow");
});
$("#green").click(function(){
$(".body").css("background-color","green");
});
});

$(document).ready(function(){
//$(".header").mouseover(function(){
//$(".header").toggleClass("resum");


//});
$(".h1").click(function(){
$(".h1").toggleClass("techbox");
});
$(".h2").click(function(){
$(".h2").toggleClass("techbox");
});
});

$(document).ready(function(){
$("#large").click(function(){
$("p").css("font-size", "36px");
});
$("#medium").click(function(){
$("p").css("font-size", "26px");
});
$("#small").click(function(){
$("p").css("font-size", "16px");
});
});
$(document).ready(function(){
$("#cover").hide();
$("ul").mouseover(function welcome(x){
	$("#cover").fadeIn(3000,function(){
		alert ("Please click to continue");
		$("#cover").click(function(){
			$("#cover").hide(1000,function(){
				$(welcome).Stop(1000);
			});
		});
	});
});
});
$(document).ready(function(){
$("#main").hide();
$("#home").click(function(){
$("#main").slideToggle("slow");

});
});
$(document).ready(function(){
$("#about").hide();
$("#aboutus").click(function(){
$("#about").slideToggle("slow");

});
});

$(document).ready(function(){
$("#cont").hide();
$("#contact").click(function(){
$("#cont").slideToggle("slow");

});
});
$(document).ready(function(){
$("#left #right").click(function(){
	$("#imgs").fadeOut(2000);
});

});