define(['physicsjs'], function(Physics){

    Physics.behavior('push-body', function(parent){

        var body = null;
        var acc = 0;
        var maxVel;

        return {

            init: function(options) {
                parent.init.call(this);

                body = options.body;
                acc = options.acc;
                maxVel = options.max;
            },

            behave: function(){
                if(-body.state.vel.y <= maxVel.y){
                    body.accelerate(Physics.vector(acc));
                }
            }
        };
    });
});