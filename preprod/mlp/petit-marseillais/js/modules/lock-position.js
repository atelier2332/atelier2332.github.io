define(['physicsjs'], function(Physics){

    Physics.behavior('lock-position', function(parent){

        var body = null;
        var freeze = {};

        return {

            init: function(options) {
                parent.init.call(this);

                body = options.body;

                if(options.x !== undefined){
                    freeze.x = options.x;
                } else if(options.y !== undefined){
                    freeze.y = options.y;
                }
            },

            behave: function(){

                if(freeze.x !== undefined){
                    body.state.pos.x = freeze.x;
                } else if(freeze.y !== undefined){
                    body.state.pos.y = freeze.y;
                }
            }
        };
    });
});