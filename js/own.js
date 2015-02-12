
function playSlider() {
   $("#lect, #right").click();
   t = setInterval(function () { playSlider(); }, 4000);
}
$(document).ready(function(){
	var images=["images/101.jpg", "images/102.jpg", "images/103.jpg"];
	var imagecount=0;
$("#left, #right").click(function(){
	$("#imgs").fadeOut(4000, function(){
		$("#imgs").attr("src", images[imagecount]);
		imagecount++;
		if (imagecount>2){imagecount=0;}
		$("#imgs").fadeIn(5000);
		
	});
});

});


 