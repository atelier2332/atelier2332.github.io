app.directive('flipcards', function(){
  return{
    restrict: 'A',
    link: function(scope, el, attrs){
      el.on('click', function(e){
        e.preventDefault();
        el.toggleClass('active');
        $('.card').toggleClass('flipped');
      });
    }
  };
});
