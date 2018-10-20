// @author: tlhoest@gmail.com
// Contrôle l'affichage du menu

(function(){

  var btnOpen = document.getElementById('btn-burger');
  var btnClose = document.getElementById('btn-close-menu');
  var menu = document.getElementById('menu');

  var bufferedColor = "";
  var colors = [
    'yellow',
    'green',
    'pink',
    'blue'
  ];

  btnOpen.addEventListener('click', function(e){
    e.preventDefault();
    bufferedColor = color();
    menu.className = bufferedColor + ' visible';
  });

  btnClose.addEventListener('click', function(e){
    e.preventDefault();
    menu.className = bufferedColor + ' hidden';
  });

  function color(){
    var r = Math.floor(Math.random()*4);
    return colors[r];
  }

})();
