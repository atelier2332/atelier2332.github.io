app.factory('ErrorHandler', function(){
  return {
    displayError: function(response){
      alert('Erreur! ----> ' + response);
    }
  };
});
