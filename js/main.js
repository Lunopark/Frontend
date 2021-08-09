$(function(){
 $('.burger').click(function () {
    $('.mobile-nav').toggleClass('show-menu')
 })
});

$(function(){
    $('.close').click(function () {
       $('.mobile-nav').toggleClass('show-menu')
    })
});

$('#tabs__caption li').click(function(){
   if (!$(this).hasClass("active")) {
     $('#tabs__caption li.active').removeClass("active");
     $(this).addClass("active");
   }
});