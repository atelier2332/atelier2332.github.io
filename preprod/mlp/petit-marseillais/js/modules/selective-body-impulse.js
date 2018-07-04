define(['physicsjs'], function(Physics){

    Physics.behavior('selective-body-impulse', 'body-impulse-response', function(parent){

        return {

            init: function(options){
                parent.init.call(this);

                this.queries = options.queries;
            },

            // extended
            connect: function(world){

                world.on( this.options.check, this.respond, this );
            },

            // extended
            disconnect: function(world){

                world.off( this.options.check, this.respond );
            },

            // extended
            respond: function(data){

                for(var i = 0; i < this.queries.length; i++) {
                    var found = Physics.util.find( data.collisions, this.queries[i] );
                    if (found){
                        this.collideBodies(
                            found.bodyA,
                            found.bodyB,
                            found.norm,
                            found.pos,
                            found.mtv
                        );
                    }
                }
            }
        };
    });
});