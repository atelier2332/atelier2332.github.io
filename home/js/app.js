(function(){

  var nX = 1;
  var nY = 1;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z = 5;

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setClearColor(0xFFCA19);
  document.getElementById('three').appendChild( renderer.domElement );

  var texture = new THREE.TextureLoader().load( "home/textures/1.png" );
  //texture.wrapS = THREE.RepeatWrapping;
  //texture.wrapT = THREE.RepeatWrapping;
  //texture.repeat.set( 4, 4 );

  var material = new THREE.MeshBasicMaterial( { color: 0xffffff, map: texture, side:THREE.DoubleSide } );

  geometry = new THREE.CircleGeometry( 2, 32 );
  var circle = new THREE.Mesh( geometry, material );
  //circle.position.set({x: -0.1, y: -0.1, z: 0});
  scene.add( circle );

  geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
  var torusKnot = new THREE.Mesh( geometry, material );
  scene.add( torusKnot );

  function animate() {
  	requestAnimationFrame( animate );
  	renderer.render( scene, camera );

    circle.rotation.x += 0.001 * nX;
    circle.rotation.y += 0.01 * nY;

    torusKnot.rotation.x -= 0.009 * nX;
    torusKnot.rotation.y += 0.001 * nY;
  }
  animate();

  window.addEventListener('mousemove', function(e){
      nX = (e.pageX / (window.innerWidth / 2)) - 1;
      nY = (e.pageY / (window.innerHeight / 2)) - 1;
  });

})();
