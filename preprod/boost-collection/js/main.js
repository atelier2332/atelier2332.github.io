$(document).ready(function(){

  // menu

  var menu = $('#menu');

  $('#btn-burger').on('click', function(e){
    e.preventDefault();
    menu.addClass('visible');
  });

  $('#btn-close-menu').on('click', function(e){
    e.preventDefault();
    menu.removeClass('visible');
  });

  // menu

  $('#btn-godown').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#ff').offset().top}, 500);
  });

  // tech menu

  $('.techmenu a').on('click', function(e){
    e.preventDefault();
    var t = $(e.currentTarget).attr('href');
    $('html, body').animate({scrollTop: $(t).offset().top}, 500);
  });

  $('#btn-tech-top').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('.techmenu').offset().top}, 500);
  });

  // product accordion

  $('.accordion .tablink').on('click', function(e){
    e.preventDefault();
    $('.accordion p').hide();
    $(e.target).next().slideDown('fast');
  });

  // order select

  $('.order .select button').on('click', function(e){
    var t = $(e.target);
    var children = t.parent().children();
    children.removeClass('active');
    children.attr('value', 0);
    t.addClass('active');
    t.attr('value', 1);
  });

  // slidermob

  var slidermobIndex = 0;
  var slidermobIndexMax = $('.slidemob').length;

  function slideMob(){
    if($('#slider-mob').length > 0){
      $('#slidemob' + slidermobIndex).removeClass('visible');
      slidermobIndex ++;
      if(slidermobIndex >= slidermobIndexMax){
        slidermobIndex = 0;
      }
      $('#slidemob' + slidermobIndex).addClass('visible');
    }
  }
  $('#slidemob0').addClass('visible');

  // slider

  var sliderIndex = 0;
  var sliderIndexMax = $('.slide').length;

  function slide(e){

    $('#slide' + sliderIndex).removeClass('visible');

    if(e !== undefined){
      if($(e.currentTarget).attr('id') == 'back'){
        sliderIndex --;
      } else {
        sliderIndex ++;
      }
    } else {
      sliderIndex ++;
    }

    if(sliderIndex >= sliderIndexMax){
      sliderIndex = 0;
    }

    $('#slide' + sliderIndex).addClass('visible');

    if(sliderIndex == 0){
      $('#back').hide();
    } else {
      $('#back').show();
    }

    if(sliderIndex == sliderIndexMax - 1){
      $('#forward').hide();
    } else {
      $('#forward').show();
    }
  }

  $('#slide0').addClass('visible');
  $('#back').on('click', slide);
  $('#forward').on('click', slide);
  $('#slider-boost-collection').on('click', function(e){
    e.preventDefault();
    slide();
  });

  function loopSlide() {
      setTimeout(function(){
          slide();
          slideMob();
          //
          loopSlide();
      }, 5000);
  }
  loopSlide();

  // popup sizes-table

  var sTable = $('.sizes-table');

  $('#btn-sizes').on('click', function(e){
    e.preventDefault();
    menu.removeClass('visible');
    sTable.addClass('visible');
  });
  $('#btn-sizes').on('click', function(e){
    e.preventDefault();
    menu.removeClass('visible');
    sTable.addClass('visible');
  });
  $('#btn-close-sizes').on('click', function(e){
    e.preventDefault();
    sTable.removeClass('visible');
  });

  // random meter

  var randMeter = Math.floor(Math.random() * 35) + 15;
  $('.meter .val').css({'width': randMeter + '%'});

});
