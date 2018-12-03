(function(){

  // mouseover

  $('.navlink').on('mouseover', function(e){
    $('body').addClass('blue');
    $('.header').addClass('blue');
    $('.desc').addClass('hidden');

    if($(this).attr('id') == 'navlink-left')
      $('.navlink-title').text('portfolio');
    if($(this).attr('id') == 'navlink-right')
      $('.navlink-title').text('github');

      $('.navlink-title').addClass('visible');
  });

  // mouseout

  $('.navlink').on('mouseout', function(e){
    $('body').removeClass('blue');
    $('.header').removeClass('blue');
    $('.desc').removeClass('hidden');
    $('.navlink-title').removeClass('visible');
  });


})();
