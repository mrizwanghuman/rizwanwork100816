$(document).ready(function() {

	        var x = 0;
	        var y = 0;
			//cache a reference to the banner
	        var banner = $("#banner");

			// set initial banner background position
	        banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');

	 		// scroll up background position every 90 milliseconds
	        window.setInterval(function() {
	        	banner.css("backgroundPosition", x + 'px' + ' ' + y + 'px');
	            y--;
	            //x--;

	            //if you need to scroll image horizontally -
	            // uncomment x and comment y

        }, 30);

$("#arrow ul").hide();
$("#arrow").mouseover(function(){	        
$("#arrow ul").fadeIn(1000);
$("#arrow ul").mouseleave(function(){
$("#arrow ul").fadeOut();
});
});
});
$(document).ready(function flowername(){
	$("#fllily").hide();
var lilly="Lily";
var redrose ="Red Rose";

if (flowerenter == lilly){
alert("The lily is a symbol of purity and refined beauty. The name Lily can also be short for Elizabeth, Lillian, Liliana or Lilith.");

} else {
	alert("Please enter right name.");
}
if (flowerenter== redrose){
alert("The lily is a symbol of purity and refined beauty. The name Lily can also be short for Elizabeth, Lillian, Liliana or Lilith.");

} else {
	alert("Please enter right name.");
}
});
function myfunction(a,b){
	

}
var riz = {"Name": "Rizwan"};
console.log(riz.name);