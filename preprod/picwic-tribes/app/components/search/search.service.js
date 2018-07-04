app.factory('SearchService', function($http, ErrorHandler){
  return{
    // @query
    search: function(query, success){
      $http({
        method: 'GET',
        url: 'assets/ressources-test/search.json'
      }).then(function(response){
        success.call(this, response);
      }, function(response){
        ErrorHandler.displayError(response);
      });
    }
  };
});
