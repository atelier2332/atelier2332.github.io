app.directive('siteHover', function(){
  return{
    restrict: 'A',
    scope: {
      'siteHover': '@',
      'baseImg': '@'
    },
    link: function(scope, el, attrs){
      el.on('mouseover', function(e){
        el.css({'background-image': 'url(' + scope.siteHover + ')'});
      });
      el.on('mouseout', function(e){
        el.css({'background-image': 'url(' + scope.baseImg + ')'});
      });
    }
  };
});
