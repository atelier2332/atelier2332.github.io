'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var renderer, scene, camera;
var rings = [];
var pillar = null;

/**
*
* @class RingOfGlory
*
* */

var RingOfGlory = (function () {
    function RingOfGlory(spline, speed) {
        _classCallCheck(this, RingOfGlory);

        this.spline = spline;
        this.speed = speed;

        this.tangent = new THREE.Vector3();
        this.axis = new THREE.Vector3();
        this.up = new THREE.Vector3(0, 1, 0);
        this.counter = 0;

        // RING

        var geometry = new THREE.Geometry();
        var splinePoints = spline.getPoints(150);
        for (var i = 0; i < splinePoints.length; i++) {
            geometry.vertices.push(splinePoints[i]);
        }

        this.ring = new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: 0xB5865A }));

        // VEHICLE

        this.vehicle = new THREE.Mesh(new THREE.CircleGeometry(5, 32), new THREE.MeshBasicMaterial({
            color: 0xB5865A,
            side: THREE.DoubleSide
        }));

        scene.add(this.ring);
        scene.add(this.vehicle);
    }

    _createClass(RingOfGlory, [{
        key: 'render',
        value: function render() {
            if (this.counter <= 1) {
                this.vehicle.position.copy(this.spline.getPointAt(this.counter));
                this.tangent = this.spline.getTangentAt(this.counter).normalize();
                this.axis.crossVectors(this.up, this.tangent).normalize();
                var radians = Math.acos(this.up.dot(this.tangent));
                this.vehicle.quaternion.setFromAxisAngle(this.axis, radians);

                this.counter += this.speed;
            } else {
                this.counter = 0;
            }
        }
    }, {
        key: 'vehicleRef',
        get: function get() {
            return this.vehicle;
        }
    }]);

    return RingOfGlory;
})();

/**
*
* @class PillarOfSolitude
*
* */

var PillarOfSolitude = (function () {
    function PillarOfSolitude() {
        _classCallCheck(this, PillarOfSolitude);

        this.pillar = null;
        var self = this;

        var texture = new THREE.ImageUtils.loadTexture('img/pillar.png', undefined, function (e) {

            texture.minFilter = THREE.NearestFilter;

            var material = new THREE.MeshLambertMaterial({
                map: texture,
                side: THREE.DoubleSide,
                transparent: true
            });

            var geometry = new THREE.PlaneBufferGeometry(250, 250);

            self.pillar = new THREE.Mesh(geometry, material);
            self.pillar.position.x = 20;
            self.pillar.position.y = 10;
            self.pillar.rotation.x = 50;
            self.pillar.rotation.y = 20;
            self.pillar.rotation.z = 180;

            scene.add(self.pillar);
        });
    }

    _createClass(PillarOfSolitude, [{
        key: 'render',
        value: function render() {
            if (this.pillar !== null) {
                this.pillar.rotation.y += 0.001;
            }
        }
    }]);

    return PillarOfSolitude;
})();

/*
*
*
*
* */

function init() {

    /*
    *
    * SETUP
    *
    * */

    // RENDERER

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor(0x0A0D61);
    renderer.setSize(document.body.clientWidth, document.body.clientHeight);
    document.getElementById('sculpture').appendChild(renderer.domElement);

    // CAM

    camera = new THREE.PerspectiveCamera(45, document.body.clientWidth / document.body.clientHeight, 1, 800);
    camera.position.set(100, 0, 400);
    camera.lookAt(new THREE.Vector3(80, 0, 0));

    // SCENE

    scene = new THREE.Scene();

    // FOG

    scene.fog = new THREE.Fog(0x0A0D61, 200, 500);

    /*
    *
    * ADD OBJECTS
    *
    * */

    // PILLAR

    pillar = new PillarOfSolitude();

    // RINGS

    rings[0] = new RingOfGlory(new THREE.SplineCurve3([new THREE.Vector3(0, 0, -100), new THREE.Vector3(-150, 50, 0), new THREE.Vector3(0, 100, 100), new THREE.Vector3(150, -50, 0), new THREE.Vector3(0, 0, -100)]), 0.002);

    rings[1] = new RingOfGlory(new THREE.SplineCurve3([new THREE.Vector3(0, -50, -100), new THREE.Vector3(-100, 0, 0), new THREE.Vector3(0, 0, 150), new THREE.Vector3(150, 40, 0), new THREE.Vector3(0, -50, -100)]), 0.004);

    // LIGHT

    var directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(50, 150, 150);
    directionalLight.target = rings[0].vehicleRef;
    scene.add(directionalLight);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    render();
}

function render() {
    for (var i = 0; i < rings.length; i++) {
        rings[i].render();
    }
    pillar.render();
    renderer.render(scene, camera);
}

init();

//# sourceMappingURL=app-compiled.js.map