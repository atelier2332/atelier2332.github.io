app.directive('world', function(World, Composer){
    return {
        restrict: 'E',
        link: function(scope, el) {
            scope.$on('WorldLoaded', function(e, a){
                el[0].appendChild(a.renderer.domElement);
                Animate(function(t){
                    a.controls.update();
                    Composer.render(0.1);
                });
                var resize = new WindowResize(a.renderer, a.camera);
            });
        }
    };
});