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
  
  // select
  
  $('.js-select').select2();
  
  // questionnaire
  
  $('.js-questionnaire').on('click', function(e){
    e.preventDefault();
    $(this).parents('.trial_lesson').hide(0).parents('.trial_section').find('.questionnaire').show(0);
  });
  
  var steps = $('.questionnaire form').children('.item_step'); // находим все шаги формы
	$(steps[0]).show(); // показываем первый шаг
	var current_step = 0; // задаем текущий шаг
	$('.next').click(function(e){	// Событие клика на ссылку "Следующий шаг"
      e.preventDefault();
		if (current_step == steps.length-2) { // проверяем, будет ли следующий шаг последним
		  $(this).hide(); // скрываем ссылку "Следующий шаг"
          $('.questionnaire .btn').show(); // показываем кнопку "Отправить анкету"
		}
		current_step++; // увеличиваем счетчик текущего слайда
		changeStep(current_step); // меняем шаг
	});
  
  	function changeStep(i) { // функция смены шага
      $(steps[i]).show(); // показываем текущий  
	}
  
  // popup
  
  $('.js-popup').click(function (e) {
        e.preventDefault();
        var DataId = $(this).attr('data-id');
        if (typeof DataId == "string") {
          $('#'+DataId).css('display', 'flex');
          $('body').css('overflow', 'hidden');
          $('header').css('z-index', '10');
        } 
    });
    $('.popup').click(function (e) {
        e = event || window.event
        if (e.target == this) {
          $(this).css('display', 'none');
          $('body').css('overflow', 'auto'); 
          $('header').css('z-index', '11');
        }
    });
//	$('.popup_close').click(function (e) {
//         e.preventDefault();
//           $(this).parents('.popup').css('display', 'none');
//           $('body').css('overflow', 'auto'); 
//    });
    $('.popup .popup_content').click(function(e) {
		e.stopPropagation();
	}); 
  
  // input file 
  
  $(function(){
    var wrapper = $('.cv'),
      inp = wrapper.find('input'),
      lbl = wrapper.find('mark');
    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;
    inp.change(function(){
      var file_name;
      if( file_api && inp[ 0 ].files[ 0 ] )
        file_name = inp[ 0 ].files[ 0 ].name;
      else
        file_name = inp.val().replace("C:\\fakepath\\", '');
      if( ! file_name.length )
        return;
      if( lbl.is(':visible') ){
        lbl.text( file_name );
      }
    }).change();
  });
  $( window ).resize(function(){
      $('.cv input').triggerHandler('change');
  });
 
  // media
  
  if($(window).width() > 767) {
    
    $('.js-popupMap').click(function (e) {
      e.preventDefault();
      resizeMap()
      var DataId = $(this).attr('data-id');
      if (typeof DataId == "string") {
        $('#'+DataId).css('display', 'flex');
        $('body').css('overflow', 'hidden');  
      }
    });
    $('.popup').click(function (e) {
      e = event || window.event
      if (e.target == this) {
        $(this).css('display', 'none');
        $('body').css('overflow', 'auto'); 
      }
    });
	$('.popup_close').click(function (e) {
      e.preventDefault();
        $(this).parents('.popup').css('display', 'none');
        $('body').css('overflow', 'auto'); 
    });
    $('.popup .popup_content').click(function(e) {
      e.stopPropagation();
	}); 
    
  } 
  
  
})