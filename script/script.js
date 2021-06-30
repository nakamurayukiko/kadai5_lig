$(document).ready(function(){
  $('.burger-btn').on('click',function(){
    $('.burger-btn').toggleClass('close');
    $('.nav-wrapper').toggleClass('slide-in');
    $('body').toggleClass('noscroll');
  });
  
  
});
$(document).ready(function(){
  $('.slick01').slick({
    autoplay: false, 
    dots: true,
    arrows: true,
  });
})