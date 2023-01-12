

$(document).ready(function(){




  var top_show = 150;
  var delay = 1000; 
  $(document).ready(function() {
    $(window).scroll(function () { 
      if ($(this).scrollTop() > top_show) $('#top').addClass('active');
      else $('#top').removeClass('active');
    });
    $('#top').click(function () { 
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

$(".eEKsGV").click(function(){
 $(".gZUBTC").slideToggle(0);
 $(this).toggleClass('jnqfyK');
});




$(".golight").click(function(){
	
 $(this).toggleClass('cMDLeP');
 $(this).find('span').toggleClass('dryhWZ');
 $('#__next').toggleClass('whitecolor'); 
 
 $('.sc-b7303a5e-1').toggleClass('jptHyI');
 $('.sc-972736b8-0').toggleClass('egGBjW');
 
 $('body').toggleClass('light');


 
 
});





$(".golight").click(function(){
 sessionStorage.setItem('class','active');
});

$(".golight.cMDLeP").click(function(){
 sessionStorage.removeItem('class','active');
});

if (sessionStorage.getItem('class') !== null) {
	
 $('.golight').addClass('cMDLeP');
 $('.golight').find('span').toggleClass('dryhWZ');
 $('#__next').toggleClass('whitecolor'); 
 
 $('.sc-b7303a5e-1').toggleClass('jptHyI');
 $('.sc-972736b8-0').toggleClass('egGBjW');
 
 $('body').toggleClass('light');

 
 
 
}



});	