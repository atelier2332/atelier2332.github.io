app.factory('SiteService', function($http, ErrorHandler){
  return{

    // on get TOUS les infos du "site"
    // @codeSite = champ codeSite en BDD
    // note : il faut préparer la data depuis le back (cf: site.json)
    getSite: function(codeSite, success){
      $http({
        method: 'GET',
        url: 'assets/ressources-test/site.json'
      }).then(function(response){
        success.call(this, response);
      }, function(response){
        ErrorHandler.displayError(response);
      });
    },

    // @matricule = rh_matricule
    // @card = infos carte
    updateCard: function(matricule, card, success){

      // callback pour TEST uniquement (à virer)
      success.call(this);

      /*
      $http({
        method: 'POST',
        url: 'assets/ressources-test/site.json'
      }).then(function(response){
        success.call(this, response);
      }, function(response){
        ErrorHandler.displayError(response);
      });
      */
    },

    // On laisse le soin au back de gérer le modèle de base d'une nouvelle tribu
    createTribe: function(success){
      $http({
        method: 'GET',
        url: 'assets/ressources-test/newTribe.json'
      }).then(function(response){
        success.call(this, response);
      }, function(response){
        ErrorHandler.displayError(response);
      });
    },

    // Cette requête est à créer à 100%
    // @data : object = données du fichier
    // @isAlias : bool = si l'avatar est ou non celui de l'alias (carté retournée)
    updateAvatar: function(matricule, data, isAlias, success){
      //
    },

    // mettre à jour le pseudo :
    // champ "app_pseudo"
    updatePseudo: function(tribeMember, success){

      // callback pour TEST uniquement (à virer)
      success.call(this);


      /*
      $http({
        method: 'PUT',
        url:
      }).then(function(response){
        success.call(this, response);
      }, function(response){
        ErrorHandler.displayError(response);
      });
      */
    },

    // @noobs:Array = liste des noobs
    updateNoobs: function(noobs, success){

      // callback pour TEST uniquement (à virer)
      success.call(this);

      /*
      $http({
        method: 'PUT',
        url:
      }).then(function(response){
        success.call(this, response);
      }, function(response){
        ErrorHandler.displayError(response);
      });
      */
    },

    // Appelée à chaque modif sur les tribus
    // @newTribes:Array = liste des tribus
    updateTribes: function(newTribes){
      /*
      $http({
        method: 'PUT',
        url:
      }).then(function(response){
        success.call(this, response);
      }, function(response){
        ErrorHandler.displayError(response);
      });
      */
    }

  };
});
