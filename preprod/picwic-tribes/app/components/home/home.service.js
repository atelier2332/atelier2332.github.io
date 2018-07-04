app.factory('HomeService', function($http, ErrorHandler){
  return{
    // @success : function = callback contrôleur
    getSites: function(success){
      $http({
        method: 'GET',
        url: 'assets/ressources-test/sites.json'
      }).then(function(response){
        success.call(this, response);
      }, function(response){
        ErrorHandler.displayError(response);
      });
    }
  };
});
