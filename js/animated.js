$(function() {  
  
            var x = 0;  
            var y = 0;  
            //cache a reference to the banner  
             
  
            // set initial banner background position  
            $("#banner").css('backgroundPosition', x + 'px' + ' ' + y + 'px');  
  
            // scroll up background position every 90 milliseconds  
            window.setInterval(function() {  
               $("#banner").css("backgroundPosition", x + 'px' + ' ' + y + 'px');  
                y--;  
                x--;  
  
                //if you need to scroll image horizontally -  
                // uncomment x and comment y  
  
            }, 90);  
  
});  

$(document).ready(function(){
var p = 0;
var q = 0;
$("#img").css("backgroundPosition", q + "px" + " " + p + "px");
window.setInterval(function(){
$("#img").css("backgroundPosition", q + "px" + " " + p + "px");
p--;
q++;
}, 30);
});