var World = (function(){

	//---------------------------

	var sceneSize = 4000;

	// RENDERER

	var renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setClearColor(0xfff);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('world').appendChild(renderer.domElement);

	// CAM

	var camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, sceneSize * 2);
	camera.position.set(-50, 50, 100);
	//camera.lookAt(new THREE.Vector3(0, 0, 0));

	// SCENE

	var scene = new THREE.Scene();

	// FOG

	scene.fog = new THREE.Fog(0x111111, 400, sceneSize/2);

	// LIGHTS

	var dl = new THREE.DirectionalLight(0xffffff, 1);
	dl.position.set(sceneSize, sceneSize, sceneSize);
	scene.add(dl);

	// CONTROLS

	//var controls = new THREE.OrbitControls(camera, renderer.domElement);

	return{
		renderer: renderer,
		camera: camera,
		scene: scene,
		//controls: controls,
		sceneSize :sceneSize
	}
})();
