// Utilisation de jquery

$(document).ready(function(){

  $('#openMenu').click(function(){
    $('#menu').fadeIn('fast', function(){
      $('#menu nav').slideToggle('fast');
    });
    $('#openMenu').slideToggle('fast');
    $('body').addClass('stop-scrolling');
  });

  $('#cross').click(function(){
    $('#menu').fadeOut('fast');
    $('#menu nav').slideToggle('fast');
    $('#openMenu').slideToggle('fast');
    $('body').removeClass('stop-scrolling');


  });















});
