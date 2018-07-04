app.controller('NoobsController', [
  '$scope',
  '$rootScope',
  'NoobsService',
function(
  $scope,
  $rootScope,
  NoobsService
){

  /*
  *
  * getNoobs
  * Nombre total de nouveaux arrivants
  *
  */
  NoobsService.getNoobs(function(response){
    $scope.noobs = response.data.noobs;
  });

  /*
  *
  * Emit depuis la fonction noobMoved du SiteController
  * lorsqu'un nouvel arrivant est ajouté à une tribu
  *
  */
  $rootScope.$on('KILL_NOOB', function(){
    $scope.noobs --;
  });

  /*
  *
  * Emit depuis la fonction deleteTribe du SiteController
  * lorsque les membres d'une tribu supprimée son ajoutés à la liste des nouveaux arrivants
  *
  */
  $rootScope.$on('ADD_NOOB', function(){
    $scope.noobs ++;
  });

}]);
