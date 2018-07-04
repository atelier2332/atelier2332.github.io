define(['physicsjs'], function(Physics){

    Physics.behavior('scroll', function(parent){

        var scrollSpeed;
        var stop = false;
        var x = 1;
        var baseVel = 0;

        return {

            init: function(options) {
                parent.init.call(this);

                //bodies = options.bodies;
                scrollSpeed = options.scrollSpeed;
            },

            stop: function(){
                stop = true;
            },

            run: function(){
                stop = false;
            },

            slowDown: function(){
                x -= 0.04;
              scrollSpeed = scrollSpeed * x;
            },

            setBaseVelocity: function(velocity){

                var bodies = this.getTargets();

                for (var i = 0, l = bodies.length; i < l; ++i){
                    bodies[i].state.vel.y = velocity;
                }
            },

            behave: function(){

                var bodies = this.getTargets();

                for (var i = 0, l = bodies.length; i < l; ++i){

                    if(!stop){
                        if(bodies[i].state.vel.y <= scrollSpeed) {
                            bodies[i].state.vel.y += 0.0005;
                        } else {
                            bodies[i].state.vel.y = scrollSpeed;
                        }
                    } else {
                        bodies[i].state.vel.y = 0;
                    }
                }
            }
        };
    });
});