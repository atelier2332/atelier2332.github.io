app.factory('World', function($rootScope){

    var width = window.innerWidth;
    var height = window.innerHeight;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(40, width/height, 0.1, 2000);
    camera.position.x = 50;
    camera.position.y = 50;
    camera.position.z = 50;

    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    // todo : séparer loader 

    var loader = new THREE.ObjectLoader();
    loader.load('assets/scenes/ho.json', function(s){

        scene = s;

        var m = [];
        m[0] = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("assets/textures/skybox.jpg")});
        m[1] = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture("assets/textures/skybox.jpg"), 
            ambient: 0x3b285b,
            side: THREE.DoubleSide
        });
        m[2] = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture("assets/textures/skybox.jpg"),
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.8
        });
        m[3] = new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture("assets/textures/skybox.jpg"), ambient: 0xffffff});

        for (var i = scene.children[0].children.length - 1; i >= 0; i--) {
            scene.children[0].children[i].material = m[2];
        }

        var light = new THREE.AmbientLight(0x444444);
        scene.add(light);

        $rootScope.$broadcast('WorldLoaded', {
            scene: scene,
            camera: camera,
            renderer: renderer,
            controls: controls
        });
    });

    return {
        scene: scene,
        camera: camera,
        renderer: renderer,
        controls: controls
    };
});