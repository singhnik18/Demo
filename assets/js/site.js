$(document).ready(function(){

  var x = $(".div1").outerHeight();
  var y = $(".div2").offset().top;
  var stick = y-x ;
   $(window).scroll(function(){
    if($(this).scrollTop() >=  stick){
      $(".div2").addClass("sticky");
    }
    else {
        $(".div2").removeClass("sticky");
    }

   });


});
