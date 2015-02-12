$(document).ready(function(){
var x = 0;
var y = 0;
$("#anima").css("backgroundPosition", x + "px" + " " + y + "px");
window.setInterval(function(){
$("#anima").css("backgroundPosition", x + "px" + " " + y + "px");
y--;
},50);
$("#pt1").mouseover(function(){
$(this).animate({left:'250px',
       height:'800px',
      width:'800px'}).fadeOut(4000);
});
$("#pt2").mouseover(function(){
$(this).animate({left:'250px',
       height:'800px',
      width:'800px'}).fadeOut(4000);
});
$("#pt3").mouseover(function(){
$(this).animate({left:'250px',
       height:'800px',
      width:'800px'}).fadeOut(4000);
});
$("#pt4").mouseover(function(){
$(this).animate({left:'250px',
       height:'800px',
      width:'800px'}).fadeOut(4000);
});
    $(document).ready(function() {  
      
        //when hover over the selected item animate it, changing the left padding from its initial value to 20px  
        $('li').hover(function() {  
          $(this).stop().animate({ paddingLeft: '20px' }, 100, 'swing');  
        }, function() {  
          $(this).stop().animate({ paddingLeft: '0' }, 1000, 'swing');  
        });  
          
    });  
});

