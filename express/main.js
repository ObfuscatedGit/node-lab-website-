$(document).ready(function(){
    $("#secret").click(function(){
      $("*").hide();
    });
    $(".contact").click(function(){
      $("p").hide();
    });
    $(".contact").click(function(){
      $("p").show();
    });
    $("#see").click(function(){
      $("#images").fadeIn();
    });
    $("#see").click(function(){
      $("h2").animate({height:'toggle'});
    });  
    $('#contact').click(function() {
      $('#contact').animate(
        { deg: 180 },{
          duration: 450,
          step: function(now) {
            $("#contact").css({ transform: 'rotate(' + now + 'deg)' });
          }
        }
      );
    });
  });