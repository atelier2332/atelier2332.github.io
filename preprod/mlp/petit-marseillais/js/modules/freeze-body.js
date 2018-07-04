define(['physicsjs'], function(Physics){

    Physics.behavior('freeze-body', function(parent){

        var limit = [];
        var freeze = {};

        return {

            init: function(options) {
                parent.init.call(this);

                freeze = options;
            },

            behave: function(){

                var bodies = this.getTargets();

                for (var i = 0, l = bodies.length; i < l; ++i){

                    if(limit[i] === undefined) {
                        limit.push({x:bodies[i].state.pos.x, y:bodies[i].state.pos.y});
                    }

                    if(freeze.x) bodies[i].state.pos.x = limit[i].x;
                    if(freeze.y) bodies[i].state.pos.y = limit[i].y;
                    if(freeze.angular) bodies[i].state.angular.pos = 0;
                }
            }
        };
    });
});