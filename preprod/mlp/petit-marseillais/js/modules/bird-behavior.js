define(['physicsjs'], function(Physics){

    Physics.behavior('bird-behavior', function(parent){

        var body;
        var launched = false;

        return {

            init: function(options){
                parent.init.call(this);

                body = options.body;
            },

            behave: function(){

                if(!launched && body.state.pos.y >= -100){

                    body.accelerate(Physics.vector(-0.028, 0));

                    launched = true;
                }
            }
        };
    });
});