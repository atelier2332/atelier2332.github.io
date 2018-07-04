app.directive('avatarHover', function(){
  return{
    restrict: 'A',
    scope: {
      avatarHover: '='
    },
    link: function(scope, el, attrs){
      var img = el.find('img')[0];
      el.on('mouseover', function(){
        img.src = "assets/img/pen.png";
      });
      el.on('mouseout', function(){
        img.src = scope.avatarHover;
      });
    }
  };
});
