// @author: tlhoest@gmail.com
// Require PIXI.js

(function(){

  var particles = [];
  var numParticles = 35;
  var imagesSrc = [
    'carrebleu.png',
    'rondrose.png',
    'trianglejaune.png',
    'trianglevert.png'
  ];

  // Init Pixi
  var pixi = new PIXI.Application(window.innerWidth, window.innerHeight, {backgroundColor : 0xffffff});
  document.getElementById('particles').appendChild(pixi.view);

  // Create particles
  for(var i = 0; i < numParticles; i++){
    var shuffle = Math.floor(Math.random()*4);
    var sprite = PIXI.Sprite.fromImage('assets/img/' + imagesSrc[shuffle]);
    sprite.anchor.set(0.5);
    sprite.rotation = Math.random();
    sprite.x = Math.floor(Math.random()*pixi.renderer.width);
    sprite.y = Math.floor(Math.random()*pixi.renderer.height);
    pixi.stage.addChild(sprite);
    particles.push(sprite);
  }

  // Particles bubbling
  pixi.ticker.add(function(delta){

    for(var i = 0; i < numParticles; i++){
      particles[i].y -= 0.1*delta;
      if(particles[i].y < -10){
        particles[i].x = Math.floor(Math.random()*pixi.renderer.width);
        particles[i].y = pixi.renderer.height + 10;
        particles[i].rotation = Math.random();
      }
    }

  });

})();
