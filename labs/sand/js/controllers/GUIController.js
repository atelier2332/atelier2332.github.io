app.controller('GUICtrl', function($scope, World, Composer, $firebase){

    var ref = new Firebase("https://zuunduun.firebaseio.com/presets");
    var sync = $firebase(ref.child('preset-0'));

    var syncObject = $firebase(ref.child('preset-0')).$asObject();

    syncObject.$loaded()
    .then(function(data) {
        $scope.effects = data;
        Composer.setEffects($scope.effects);
        Composer.setChain($scope.effects);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });

    $scope.updateEffect = function(effect, param, val){
        Composer.setEffect(effect, param, val);
    };

    $scope.resetChain = function(){
        Composer.setChain($scope.effects);
    };

    $scope.saveSettings = function(){
        //sync.$set('preset-0', $scope.effects);
        $scope.effects.$save();
    };

});