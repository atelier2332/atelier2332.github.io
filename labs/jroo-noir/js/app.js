var App = App || {};

App.MainController = (function(){

    var module = {

        initialize : function() {

            if(!Modernizr.webgl){
                window.location.href = 'http://get.webgl.org/';
            }

            /*
             * RENDERER
             * <<<<<<<<<<<<<<<<<<<<<<<<<<
             * */
            var renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(renderer.domElement);

            /*
             * SCENE
             * <<<<<<<<<<<<<<<<<<<<<<<<<<
             * */
            var scene = new THREE.Scene();

            /*
             * ADD OBJECTS &/OR SCENE
             * <<<<<<<<<<<<<<<<<<<<<<<<<<
             * */
            var loader = new THREE.ObjectLoader();
            loader.load('assets/scenes/anaa.json', function(s){
                scene = s;

                var boundaries = 2000;

                /*
                 * MATERIALS
                 * <<<<<<<<<<<<<<<<<<<<<<<<<<
                 * */
                var m = [];
                m[0] = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("assets/textures/skybox.jpg")});
                m[1] = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("assets/textures/skybox.jpg"), ambient: 0x3b285b});
                m[2] = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("assets/textures/tiger.png")});
                m[3] = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("assets/textures/skybox.jpg"), ambient: 0xffffff});

                scene.children[0].material = m[0];
                scene.children[1].material = m[0];
                scene.children[2].material = m[1];
                scene.children[3].material = m[2];
                scene.children[4].material = m[3];
                scene.children[5].material = m[3];

                //console.log(scene);

                var skydome = new SkyDome("assets/textures/skybox.jpg", boundaries/2);
                scene.add(skydome);

                /*
                 * LIGHTS
                 * <<<<<<<<<<<<<<<<<<<<<<<<<<
                 * */
                var light = new THREE.AmbientLight(0xaaaaaa);
                scene.add(light);

                /*
                 * CAMERA
                 * <<<<<<<<<<<<<<<<<<<<<<<<<<
                 * */
                var camera	= new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, boundaries);
                camera.position.z = 20;

                /*
                 * CONTROLS
                 * <<<<<<<<<<<<<<<<<<<<<<<<<<
                 * */
                var controls = new THREE.PointerLockControls(camera, {x:0, y:15, z: 20});
                scene.add(controls.getObject());

                // PointerLock
                PointerLock.grab(document.body);
                $('body').click(function(){
                    PointerLock.lock();
                    controls.enabled = true;
                });

                /*
                 * POST-PROCESSING
                 * <<<<<<<<<<<<<<<<<<<<<<<<<<
                 * */
                var ppm = new PostProcessingManager(scene, renderer, camera);

                /*
                 * RENDER
                 * <<<<<<<<<<<<<<<<<<<<<<<<<<
                 * */

                var runner = new Runner();
                runner.draw = function(time){

                  skydome.rotation.x += 0.01;
                  skydome.rotation.y += 0.01;
                  skydome.rotation.z += 0.01;


                    scene.children[0].rotation.x += 0.01;
                    scene.children[0].rotation.y += 0.01;
                    scene.children[0].rotation.z += 0.01;


                    controls.update(Date.now() - time, 0.2);
                    ppm.render();
                };

                /*
                 * RESIZE
                 * <<<<<<<<<<<<<<<<<<<<<<<<<<
                 * */
                // todo : implement resize for PPM
                 var resize = new WindowResize(renderer, camera);
            });
        }
    };

    return module;
})();

App.MainController.initialize();
