/*
*
* @author Thomas Lhoest - tlhoest@gmail.com
*
* */

define([
    'physicsjs',

    //-> custom behaviors

    'modules/hero-behavior',
    'modules/bird-behavior',
    'modules/freeze-body',
    'modules/push-body',
    'modules/lock-position',
    'modules/scroll',
    'modules/selective-body-impulse'
],
function(Physics) {

    var App = {

        path: 'assets/images/',

        stage: {
            width: 960,
            height: 640,
            scrollSpeed: 0.18,
            backgroundHeight: 3467
        },

        load: function (loaded) {

            var self = this;

            this.world = Physics();

            //-//

            this.renderer = Physics.renderer('pixi', {
                el: 'world',
                width: this.stage.width,
                height: this.stage.height,
                meta: false
            });

            var assets = [
                this.path + 'overlay.png',
                this.path + 'background.jpg',
                this.path + 'fille.json',
                this.path + 'fille.png',
                this.path + 'pix.png'
            ];

            var nbLoaded = 0;
            var total = assets.length;

            this.renderer.loadSpriteSheets(assets, onProgress, assetsLoaded);

            function onProgress(e){

                nbLoaded++;
                var progress = nbLoaded / total;

                document.getElementById('loadbar').style.width = parseFloat(163*progress) + 'px';
            }

            function assetsLoaded(){

                self.initialize();

                document.getElementById('preloader').style.display = 'none';

                document.getElementById('play').addEventListener('click', function(e){
                    e.preventDefault();

                    document.getElementById('play').style.display = 'none';

                    self.start();
                });

                if(loaded !== undefined)
                    loaded.call(this);
            }
        },

		initialize: function() {

            var self = this;

            /*
            *
            *
            * BODIES
            *
            *
            * */

            var background = Physics.body('point', {
                x: 0, y: -this.stage.backgroundHeight + this.stage.height
            });
            background.view = this.renderer.createDisplay('sprite', {
                texture: self.path + 'background.jpg',
                anchor: {
                    x: 0,
                    y: 0
                }
            });

            //-//

            var hero = Physics.body('convex-polygon', {
                x: this.stage.width/2,
                y: 200,
                vertices: [
                    {x: 0, y: 120},
                    {x: 120, y: 120},
                    {x: 90, y: 0},
                    {x: 30, y: 0}
                ],
                mass: 1,
                label: 'hero',
                underBalcony: true
            });
            hero.view = this.renderer.createDisplay('movieclip', {
                anchor: {
                    x: 0.4,
                    y: 0.2
                },
                frames: [
                    'fille0.png', 'fille1.png',
                    'fille2.png', 'fille3.png',
                    'fille4.png', 'fille5.png',
                    'fille6.png', 'fille7.png',
                    'fille8.png', 'fille9.png',
                    'fille10.png', 'fille11.png',
                    'fille12.png'
                ]
            });

            //-//

            var overlay = Physics.body('point', {
                x: 0, y: -this.stage.backgroundHeight + this.stage.height
            });
            overlay.view = this.renderer.createDisplay('sprite', {
                texture: self.path + 'overlay.png',
                anchor: {
                    x: 0,
                    y: 0
                }
            });

            //-//

            var bird = Physics.body('convex-polygon', {
                x: this.stage.width,
                y: -1000,
                vertices: [
                    {x: 0, y: 20},
                    {x: 50, y: 20},
                    {x: 50, y: 0},
                    {x: 0, y: 0}
                ],
                mass: 1,
                label: 'bird',
                collided: false
            });
            bird.view = this.renderer.createDisplay('sprite', {
                texture: self.path + 'piaf.png',
                anchor: {
                    x: 0,
                    y: 0.5
                }
            });

            //-//

            var balcony = Physics.body('convex-polygon', {
                x: 310,
                y: -616,
                vertices: [
                    {x: 0, y: 100},
                    {x: 150, y: 100},
                    {x: 150, y: 0},
                    {x: 0, y: 0}
                ],
                mass: 1000000,
                label: 'balcony',
                collided: false
            });
            balcony.view = this.renderer.createDisplay('sprite', {
                texture: this.path +  'pix.png'
            });

            //-//

            var tree0 = Physics.body('circle', {
                x: 760,
                y: -170,
                radius: 190,
                label:'tree'
            });
            tree0.view = this.renderer.createDisplay('sprite', {
                texture: this.path + 'pix.png'
            });

            var tree1 = Physics.body('circle', {
                x: 705,
                y: -1454,
                radius: 135,
                label:'tree'
            });
            tree1.view = this.renderer.createDisplay('sprite', {
                texture: this.path + 'pix.png'
            });

            var tree2 = Physics.body('circle', {
                x: 193,
                y: -1828,
                radius: 112,
                label:'tree'
            });
            tree2.view = this.renderer.createDisplay('sprite', {
                texture: this.path + 'pix.png'
            });

            var end = Physics.body('convex-polygon', {
                x: 480,
                y: -2650,
                vertices: [
                    {x: 0, y: 10},
                    {x: 960, y: 10},
                    {x: 960, y: 0},
                    {x: 0, y: 0}
                ],
                label: 'end'
            });
            end.view = this.renderer.createDisplay('sprite', {
                texture: this.path + 'pix.png'
            });

            /*
             *
             *
             * QUERIES
             *
             *
             * */

            var query = {

                'hero-balcony': Physics.query({
                    $or: [
                        { bodyA: { label: 'hero' }, bodyB: { label: 'balcony' } },
                        { bodyB: { label: 'hero' }, bodyA: { label: 'balcony' } }
                    ]
                }),
                'hero-walls': Physics.query({
                    $or: [
                        { bodyA: { label: 'hero' }, bodyB: { label: undefined } },
                        { bodyB: { label: 'hero' }, bodyA: { label: undefined } }
                    ]
                }),
                'hero-tree': Physics.query({
                    $or: [
                        { bodyA: { label: 'hero' }, bodyB: { label: 'tree' } },
                        { bodyB: { label: 'hero' }, bodyA: { label: 'tree' } }
                    ]
                }),
                'hero-bird': Physics.query({
                    $or: [
                        { bodyA: { label: 'hero' }, bodyB: { label: 'bird' } },
                        { bodyB: { label: 'hero' }, bodyA: { label: 'bird' } }
                    ]
                }),
                'hero-end': Physics.query({
                    $or: [
                        { bodyA: { label: 'hero' }, bodyB: { label: 'end' } },
                        { bodyB: { label: 'hero' }, bodyA: { label: 'end' } }
                    ]
                })
            };

            /*
             *
             *
             * BEHAVIORS
             *
             *
             * */

            var edgeBounce = Physics.behavior('edge-collision-detection', {
                aabb: Physics.aabb(250, -500, this.stage.width - 250, this.stage.height + 500),
                restitution: 0.2,
                cof: 2
            }).applyTo([hero]);

            //-//

            this.heroBehavior = Physics.behavior('hero-behavior', {body: hero});

            //-//

            var birdBehavior = Physics.behavior('bird-behavior', {body: bird});

            //-//

            this.scroll = Physics.behavior('scroll', {
                scrollSpeed: this.stage.scrollSpeed
            }).applyTo([background, balcony, tree0, tree1, tree2, end, overlay, bird]);

            //-//

            var freezer = Physics.behavior('freeze-body', {
                x: true,
                y: false,
                angular: true
            }).applyTo([balcony]);

            //-//

            var impulse = Physics.behavior('selective-body-impulse', {
                queries: [
                    query['hero-balcony'],
                    query['hero-walls']
                ]
            });

            //-//

            var pushHero = Physics.behavior('push-body', {
                body: hero,
                acc: { x : 0, y: -0.0004 },
                max: {x: 0, y: this.stage.scrollSpeed}
            });

            /*
             *
             *
             * ADD
             *
             *
             * */

            this.world.add([

                this.renderer,

                //-> bodies
                background,
                bird,
                hero,
                overlay,

                balcony,
                tree0,
                tree1,
                tree2,
                end,

                //-> behaviors
                birdBehavior,
                edgeBounce,
                freezer,
                impulse,
                Physics.behavior('sweep-prune'),
                Physics.behavior('body-collision-detection')
            ]);

            var lockBalcony;

            /*
             *
             *
             * INTERACTIONS
             *
             *
             * */

            this.world.on({

                'collisions:detected': function(data){

                    var found = {
                        balcony : Physics.util.find(data.collisions, query['hero-balcony']),
                        bird : Physics.util.find(data.collisions, query['hero-bird']),
                        tree: Physics.util.find(data.collisions, query['hero-tree']),
                        end: Physics.util.find(data.collisions, query['hero-end'])
                    };

                    if (found.balcony){

                        if(!balcony.collided) {
                            balcony.collided = true;

                            self.scroll.stop();
                            self.heroBehavior.unleash(true);

                            lockBalcony = Physics.behavior('lock-position', {
                                body:balcony,
                                y: balcony.state.pos.y
                            });

                            self.world.add([
                                lockBalcony,
                                pushHero
                            ]);

                            self.heroBehavior.popBalloon();
                            self.scroll.slowDown();
                        }
                    }

                    if (found.bird){

                        if(!bird.collided){
                            bird.collided = true;

                            self.heroBehavior.popBalloon();
                            self.scroll.slowDown();
                        }
                    }

                    if (found.tree){

                        removeBody(found.tree);

                        self.heroBehavior.popBalloon();
                        self.scroll.slowDown();
                    }

                    if(found.end){

                        removeBody(found.end);

                        self.scroll.stop();
                        self.world.remove(impulse);
                        self.heroBehavior.moveToBalcony();

                        self.end();
                    }
                }
            });

            function removeBody(found) {
                if(found.bodyA.label != 'hero') {
                    self.world.remove(found.bodyA);
                } else {
                    self.world.remove(found.bodyB);
                }
            }

            /*
             *
             *
             * RENDER
             *
             *
             * */

            this.world.on('step', function(){
                self.world.render();

                if(balcony.collided && hero.underBalcony){
                    if(hero.state.pos.x >= balcony.state.pos.x + 120 && hero.state.pos.y <= self.heroBehavior.getLimit().y){
                        self.world.remove([
                            lockBalcony,
                            pushHero
                        ]);
                        //self.heroBehavior.setLimit({y: hero.state.pos.y});
                        self.scroll.setBaseVelocity(-hero.state.vel.y);
                        self.heroBehavior.unleash(false);
                        self.scroll.run();

                        hero.underBalcony = false;
                    }
                }
            });

            //-> ticker

            Physics.util.ticker.on(function(time) {
                self.world.step(time);
            });
            Physics.util.ticker.start();
		},

        start: function() {

            this.world.add([
                this.scroll,
                this.heroBehavior
            ]);
        },

        end: function(){
            document.getElementById('end').className = 'moved';
        }
	};

	return App;
});