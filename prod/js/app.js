$(document).ready(function () {
  
  'use strict'
  
  // burger menu
  
  $('.burger_menu').click(function (e) {
    e.preventDefault();
    $('.popup_nav_overlay').fadeIn(300).addClass('opened');
    $('body').css('overflow', 'hidden');  
  });
  $('.popup_nav_overlay').click(function (e) {
    $(this).fadeOut(200).removeClass('opened');
    $('body').css('overflow', 'auto'); 
  });
  $('.nav_close').click(function (e) {
    e.preventDefault();
    $(this).parents('.popup_nav_overlay').fadeOut(200).removeClass('opened');
    $('body').css('overflow', 'auto'); 
  });
  $('.popup_nav').click(function(e) {
    e.stopPropagation();
  });
  
  // tabs
  
  $('.tabs_block').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).on('click', function (e) {
		e.preventDefault();	$(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active')
      });
    });
  });
  
  
})