app.controller('SearchbarController', [
  '$scope',
  '$state',
function(
  $scope,
  $state
){

  $scope.query = 'Rechercher dans les tribus';

  $scope.search = function(){
    $state.go('search', {'query': $scope.query});
  };

}]);
