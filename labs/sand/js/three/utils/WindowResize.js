/*
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
@author Thomas Lhoest - tlhoest@gmail.com
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
*/

/*
>> WindowResize for THREE.js
*/

var WindowResize = (function(){

	var module = function(renderer, camera, controls){

		window.addEventListener('resize', function() {
	        var WIDTH = window.innerWidth,
	            HEIGHT = window.innerHeight;
	        renderer.setSize(WIDTH, HEIGHT);
	        camera.aspect = WIDTH / HEIGHT;
	        camera.updateProjectionMatrix();
	        controls.handleResize();
	    });
	};

	return module;
})();