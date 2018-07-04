app.controller('SiteController', [
  '$scope',
  '$rootScope',
  '$stateParams',
  '$anchorScroll',
  'SiteService',
function(
  $scope,
  $rootScope,
  $stateParams,
  $anchorScroll,
  SiteService
){

  /*
  *
  * getSite (avec le code site)
  *
  */
  SiteService.getSite($stateParams.codeSite, function(response){
    $scope.site = response.data;
  });

  /*
  *
  * updateCard (avec le matricule)
  *
  */
  $scope.updateCard = function(matricule, card){
    SiteService.updateCard(matricule, card, function(){
      alert('La carte de ' + card.rh_prenom + ' ' + card.rh_nom + ' a bien été mise à jour');
    });
  };

  /*
  *
  * updateAvatar (avec le matricule)
  *
  */
  $scope.launchUploader = function(matricule, isAlias){
    $scope.displayUploader = true;
    $scope.isAlias = isAlias;
    $scope.avatarMatricule = matricule;
  };

  $scope.avatarChanged = function(el){
    $scope.avatarData = el.files[0];
  };

  $scope.updateAvatar = function(){
    SiteService.updateAvatar($scope.avatarMatricule, $scope.avatarData, $scope.isAlias, function(){
      alert("L'avatar a bien été mis à jour");
    });
  };

  /*
  *
  * updatePseudo
  *
  */
  $scope.updatePseudo = function(tribeMember){
    SiteService.updatePseudo(tribeMember, function(){
      alert('Le pseudo a bien été mis à jour');
    });
  };

  /*
  *
  * noobMoved
  * On kill les noobs en affichage async (via rootScope)
  * seulement si c'est bien sync avec la BDD
  *
  */
  $scope.noobMoved = function(noobs, index){
    noobs.splice(index, 1);
    SiteService.updateNoobs(noobs, function(){
      $rootScope.$emit('KILL_NOOB');
    });
  };

  /*
  *
  * On désactive le drag'n drop quand les cartes sont retournées sinon bordel assuré
  *
  */
  $scope.toggleDND = function(){
    if(!$scope.disableDND)
      $scope.disableDND = true;
    else
      $scope.disableDND = false;
  };

  /*
  *
  * Créer une nouvelle tribu
  *
  */
  $scope.createTribe = function(){
    SiteService.createTribe(function(newTribe){
      $scope.site.tribes.push(newTribe.data);
    });
  };

  /*
  *
  * Bouger tribu
  *
  */
  $scope.moveTribe = function (origin, destination) {
      var temp = $scope.site.tribes[destination];
      $scope.site.tribes[destination] = $scope.site.tribes[origin];
      $scope.site.tribes[origin] = temp;
  };

  /*
  *
  * Remonter la tribu dans la liste
  *
  */
  $scope.moveTribeUp = function(tribeIndex){
    $scope.moveTribe(tribeIndex, tribeIndex - 1);
  };

  /*
  *
  * Descendre la tribu dans la liste
  *
  */
  $scope.moveTribeDown = function(tribeIndex){
    $scope.moveTribe(tribeIndex, tribeIndex + 1);
  };

  /*
  *
  * Supprimer la tribu
  *
  */
  $scope.deleteTribe = function(tribeIndex, tribe){

    // Confirme bien la suppression

    if(confirm('Supprimer la tribu ?')){

      // Ajoute chaque membre à la liste des nouveaux arrivants
      // Emet un évenement "ADD_NOOB" pour le compte (navbar)

      angular.forEach(tribe.members, function(member, key){
        $scope.site.noobs.push(member);
        SiteService.updateNoobs($scope.site.noobs, function(){
          $rootScope.$emit('ADD_NOOB');
        });
      });

      // Supprime la tribu

      $scope.site.tribes.splice(tribeIndex, 1);
    }
  };

  /*
  *
  * Définir un nouveau chef
  *
  */
  $scope.setNewChief = function(tribe, member){
    angular.forEach(tribe.members, function(member, key){
      member.app_rang = 'member';
    });
    member.app_rang = 'chief';
  };

  /*
  *
  * Le watcher est appelé à chaque update
  *
  */
  $scope.$watch('site.tribes', function(newTribes){
    //$scope.modelAsJson = angular.toJson(newTribes, true);
    if(newTribes !== undefined){
      SiteService.updateTribes(newTribes);
    }
  }, true);

  /*
  *
  * On scroll direct sur la bonne carte dans le cas d'une recherche (fonctionne avec hash)
  *
  */
  $anchorScroll();

}]);
