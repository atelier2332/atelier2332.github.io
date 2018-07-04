app.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){

  /*
  *
  * getSites
  *
  */
  HomeService.getSites(function(response){
    $scope.sites = response.data.sites;
  });

}]);
