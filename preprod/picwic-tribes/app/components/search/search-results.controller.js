app.controller('SearchResultsController', [
  '$scope',
  '$stateParams',
  'SearchService',
function(
  $scope,
  $stateParams,
  SearchService
){

  $scope.query = $stateParams.query;

  SearchService.search($scope.query, function(response){
    $scope.searchResults = response.data.searchResults;
  });

}]);
