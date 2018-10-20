// @author: tlhoest@gmail.com
// Scroll automatique

(function(){

  var btnScrollDown = document.getElementById('btn-scroll-down');
  var btnScrollTop = document.getElementById('btn-scroll-top');

  if(btnScrollDown != null){
    btnScrollDown.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
    });
  }

  if(btnScrollTop != null){
    btnScrollTop.addEventListener('click', function(e){
      e.preventDefault();
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  }

})();
