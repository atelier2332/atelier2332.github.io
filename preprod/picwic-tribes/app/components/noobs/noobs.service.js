app.factory('NoobsService', function($http, ErrorHandler){

  /*

  URL à modifier :
  Nombre total de nouveaux arrivants

  */

  return{

    getNoobs: function(success){
      $http({
        method: 'GET',
        url: 'assets/ressources-test/noobs.json'
      }).then(function(response){
        success.call(this, response);
      }, function(response){
        ErrorHandler.displayError(response)
      });
    }
  };
});
