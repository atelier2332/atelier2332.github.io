(function(){

  var punchTriggered = false;

  /*-------------------*/

  var max = 0;

  var threshold = 20;
  var cutoff = 0.1;

  var gn = new GyroNorm();

  /*-------------------*/

  function onPunch(){

    if(window.navigator && window.navigator.vibrate){
       window.navigator.vibrate([200, 100, 200]);
    }

    document.getElementById('page2').style.display = 'none';
    document.getElementById('page3').style.display = 'block';

    document.getElementById('punchmeter').innerHTML = 'VOTRE VITESSE : ' + Math.floor(max) + ' M/s';
  }

  /*-------------------*/

  gn.init().then(function(){
      gn.start(function(data){

          var accel = Math.abs(data.dm.gx) - Math.abs((data.do.gamma / 90) * 9.81);
          //var accel = data.dm.gx;

          //var lpf = ((1 - cutoff) * lpf) + (cutoff * accel);
          //accel = accel - lpf;

          if(accel > threshold){

            if(!punchTriggered){
              punchTriggered = true;
              setTimeout(onPunch, 500);
            }

            if(max <= accel){
              max = accel;
            }
          }

      });
  }).catch(function(e){
    // Catch if the DeviceOrientation or DeviceMotion is not supported by the browser or device
  });

})();
